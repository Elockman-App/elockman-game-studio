const canvas = document.querySelector('#scene');
let gl = null;
try {
  gl = canvas.getContext('webgl', { antialias: true, alpha: false, powerPreference: 'high-performance' }) ||
       canvas.getContext('webgl2', { antialias: true, alpha: false, powerPreference: 'high-performance' }) ||
       canvas.getContext('experimental-webgl');
} catch (e) {
  gl = null;
}
const $ = (selector) => document.querySelector(selector);
const ui = {
  hud: $('#hud'), score: $('#score'), tickets: $('#tickets'), timer: $('#timer'),
  lives: $('#lives'), bottom: $('#bottomHud'), start: $('#startScreen'),
  pause: $('#pauseScreen'), result: $('#resultScreen'), toast: $('#toast'),
  speed: $('#speedText'), station: $('#stationSign'), best: $('#bestScore'), game: $('#game'), hazard: $('#hazardWarning'), impact: $('#lastImpact'),
  final: $('#finalScore'), finalTickets: $('#finalTickets'), finalBest: $('#finalBest'),
  resultTitle: $('#resultTitle'), sound: $('#soundButton'), fallback: $('#fallback'),
  reviveAd: $('#reviveAdButton'), doubleCoresAd: $('#doubleCoresAdButton')
};
const LANES = [-1.45, 0, 1.45];
const PLAYER_Z = 2.15;
const RUN_SECONDS = 45;
const BEST_KEY = 'elockman-orbit-best-v1';
let mode = 'menu';
let lastFrame = 0;
let audioCtx = null;
let soundOn = safeGet('elockman-orbit-sound', 'on') !== 'off';
let toastTimer = 0;
let state = freshState();
let objects = [];
let random = Math.random;
let viewport = { width: 1, height: 1, aspect: 1 };

let orbitRunCount = 0;

function initOrbitAdMob() {
  if (typeof window === 'undefined' || !window.ElockmanAdMob) return;
  window.ElockmanAdMob.init({
    gameKey: 'orbit-escape',
    test: false,
    dailyMax: 6,
    interEvery: 3,
    interMinRuns: 3,
    interGapMs: 180000,
    rewarded: {
      android: 'ca-app-pub-2933582249051161/5470567761',
      ios: 'ca-app-pub-2933582249051161/6924902267'
    },
    interstitial: {
      android: 'ca-app-pub-2933582249051161/1924886359',
      ios: 'ca-app-pub-2933582249051161/2246049823'
    },
    onAudioMute: (muted) => {
      if (!audioCtx) return;
      try {
        if (muted) audioCtx.suspend();
        else if (soundOn) audioCtx.resume();
      } catch (e) {}
    }
  });
}
initOrbitAdMob();

function freshState() {
  return { time: RUN_SECONDS, distance: 0, tickets: 0, score: 0, lane: 1, laneX: 0, envOffset: 0, speed: 14.5, spawnTimer: .4, hearts: 3, invuln: 0, lastImpact: null, sector: 'SEKTÖR 01', revived: false, doubledCores: false };
}

function boot() {
  if (!gl) {
    ui.fallback.classList.remove('hidden');
    $('#retryGraphics').addEventListener('click', () => location.reload());
    return;
  }

  const VERTEX_SHADER = [
    'attribute vec3 aPosition;',
    'attribute vec3 aNormal;',
    'attribute vec3 aColor;',
    'attribute vec2 aTexCoord;',
    'uniform mat4 uModel;',
    'uniform mat4 uViewProjection;',
    'uniform mat4 uNormalMatrix;',
    'varying vec3 vWorld;',
    'varying vec3 vNormal;',
    'varying vec3 vColor;',
    'varying vec2 vTexCoord;',
    'void main() {',
    '  vec4 world = uModel * vec4(aPosition, 1.0);',
    '  vWorld = world.xyz;',
    '  vNormal = normalize((uNormalMatrix * vec4(aNormal, 0.0)).xyz);',
    '  vColor = aColor;',
    '  vTexCoord = aTexCoord;',
    '  gl_Position = uViewProjection * world;',
    '}'
  ].join('\n');

  const FRAGMENT_SHADER = [
    'precision mediump float;',
    'uniform vec3 uTint;',
    'uniform vec3 uCamera;',
    'uniform float uEmission;',
    'uniform float uTime;',
    'uniform sampler2D uSampler;',
    'uniform float uUseTexture;',
    'varying vec3 vWorld;',
    'varying vec3 vNormal;',
    'varying vec3 vColor;',
    'varying vec2 vTexCoord;',
    'void main() {',
    '  vec3 n = normalize(vNormal);',
    '  vec3 l1 = normalize(vec3(-0.52, 0.82, 0.38));',
    '  vec3 l2 = normalize(vec3(0.72, 0.30, -0.5));',
    '  vec3 viewDir = normalize(uCamera - vWorld);',
    '  vec3 halfDir = normalize(l1 + viewDir);',
    '  float diffuse = max(dot(n, l1), 0.0) * 0.78 + max(dot(n, l2), 0.0) * 0.23;',
    '  float specular = pow(max(dot(n, halfDir), 0.0), 28.0) * 0.24;',
    '  vec3 baseColor = vColor * uTint;',
    '  if (uUseTexture > 0.5) {',
    '    vec4 tex = texture2D(uSampler, vTexCoord);',
    '    if (tex.a < 0.15) discard;',
    '    baseColor = mix(baseColor, tex.rgb * uTint, 0.88);',
    '  }',
    '  vec3 base = max(baseColor, vec3(0.0));',
    '  float grain = sin(dot(vWorld, vec3(113.1, 79.7, 53.3))) * 0.012;',
    '  float panel = 1.0 - 0.045 * step(0.988, fract(vWorld.y * 1.15)) * step(0.3, abs(n.x));',
    '  vec3 lit = base * (0.36 + diffuse + grain) * panel + vec3(specular) + base * uEmission;',
    '  float fog = smoothstep(50.0, 130.0, distance(uCamera, vWorld));',
    '  vec3 fogColor = vec3(0.012, 0.018, 0.055);',
    '  gl_FragColor = vec4(mix(lit, fogColor, fog), 1.0);',
    '}'
  ].join('\n');

  const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
  if (!program) {
    ui.fallback.classList.remove('hidden');
    $('#retryGraphics').addEventListener('click', () => location.reload());
    return;
  }
  gl.useProgram(program);
  const loc = {
    position: gl.getAttribLocation(program, 'aPosition'),
    normal: gl.getAttribLocation(program, 'aNormal'),
    color: gl.getAttribLocation(program, 'aColor'),
    texCoord: gl.getAttribLocation(program, 'aTexCoord'),
    model: gl.getUniformLocation(program, 'uModel'),
    vp: gl.getUniformLocation(program, 'uViewProjection'),
    normalMatrix: gl.getUniformLocation(program, 'uNormalMatrix'),
    tint: gl.getUniformLocation(program, 'uTint'),
    camera: gl.getUniformLocation(program, 'uCamera'),
    emission: gl.getUniformLocation(program, 'uEmission'),
    time: gl.getUniformLocation(program, 'uTime'),
    sampler: gl.getUniformLocation(program, 'uSampler'),
    useTexture: gl.getUniformLocation(program, 'uUseTexture')
  };

  // 3D Procedural Textures from Paket 3
  const texLava = loadTexture(gl, 'textures/tex_lava.png');
  const texIce = loadTexture(gl, 'textures/tex_ice.png');
  const texNebula = loadTexture(gl, 'textures/tex_nebula.png');
  const texCrater = loadTexture(gl, 'textures/tex_crater.png');
  const texMothership = loadTexture(gl, 'textures/boss_mothership.png');

  const cube = makeCube(gl);
  const sphere = makeSphere(gl, 20, 28);
  const cylinder = makeCylinder(gl, 20);
  const ring = makeTorus(gl, 22, 10);
  const shipBody = makeShipBody(gl);
  const asteroidMesh = makeAsteroid(gl, 10, 14);
  const crystalMesh = makeCrystal(gl);
  const billboardQuad = makeBillboardQuad(gl);
  const environment = buildEnvironment(gl);

  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.clearColor(0.009, 0.012, 0.035, 1);
  window.addEventListener('resize', resize);
  resize();

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 0.04) : 0;
    lastFrame = now;
    if (mode === 'playing') update(dt);
    render(now / 1000);
  }

  function update(dt) {
    state.time = Math.max(0, state.time - dt);
    state.distance += state.speed * dt;
    state.speed = Math.min(21, 14.5 + state.distance * .012);
    state.envOffset = (state.envOffset + state.speed * dt) % 96;
    state.laneX += (LANES[state.lane] - state.laneX) * Math.min(1, dt * 11);
    state.invuln = Math.max(0, state.invuln - dt);
    state.spawnTimer -= dt;

    // Sector advancement based on distance
    if (state.distance < 140) state.sector = 'SEKTÖR 01 • KRATER KUŞAĞI';
    else if (state.distance < 300) state.sector = 'SEKTÖR 02 • BUZUL YÖRÜNGESİ';
    else if (state.distance < 480) state.sector = 'SEKTÖR 03 • VOLKANİK MAGMA';
    else state.sector = 'SEKTÖR 04 • DREADNOUGHT ALANI';

    if (state.spawnTimer <= 0) {
      spawnPattern();
      state.spawnTimer += Math.max(.55, .91 - state.distance * .00035);
    }

    for (const item of objects) {
      item.previousZ = item.z;
      item.z += state.speed * dt;
    }
    for (let i = objects.length - 1; i >= 0; i--) {
      const item = objects[i];
      const shipInsideLane = Math.abs(state.laneX - LANES[item.lane]) < .66;
      const crossedPlayer = item.previousZ <= PLAYER_Z + .55 && item.z >= PLAYER_Z - .22;
      if (crossedPlayer && !item.checked && shipInsideLane) {
        item.checked = true;
        if (item.type === 'energy') collectEnergy();
        else hitAsteroid(item);
      }
      if (item.z > 10 || item.checked) objects.splice(i, 1);
    }

    updateHazardWarning();
    state.score = Math.floor(state.distance * 12 + state.tickets * 120);
    updateHud();
    if (state.time <= 0 || state.hearts <= 0) finishRun();
  }

  function spawnPattern() {
    const blockedLane = Math.floor(random() * 3);
    const safeLanes = [0, 1, 2].filter((i) => i !== blockedLane);
    const rewardLane = safeLanes[Math.floor(random() * safeLanes.length)];
    const otherLane = safeLanes.find((i) => i !== rewardLane);
    objects.push({ type: 'asteroid', lane: blockedLane, z: -72, checked: false, phase: random() * 6.2 });
    objects.push({ type: 'energy', lane: rewardLane, z: -72, checked: false, phase: random() * 6.2 });
    if (random() > .38) objects.push({ type: 'energy', lane: otherLane, z: -76, checked: false, phase: random() * 6.2 });
  }

  function render(time) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    const eye = [0, 2.9, 9.0];
    const target = [0, .55, -13.5];
    const view = lookAt(eye, target, [0, 1, 0]);
    const projection = perspective(1.02, viewport.aspect, .1, 150);
    const vp = multiply(projection, view);
    gl.useProgram(program);
    gl.uniformMatrix4fv(loc.vp, false, vp);
    gl.uniform3f(loc.camera, eye[0], eye[1], eye[2]);
    gl.uniform1f(loc.time, time);

    draw(environment, [0, 0, state.envOffset], [1, 1, 1], [1, 1, 1], 0);
    drawSpaceBackdrop(time);
    for (const item of objects) drawHazardOrEnergy(item, time);
    drawShip(time);
  }

  function drawSpaceBackdrop(time) {
    const drift = Math.sin(time * .08) * .7;

    // 1. Deep Space Cosmic Nebula Sphere (Background Ambient)
    draw(sphere, [0, 22.0, -115], [32.0, 32.0, 32.0], [.85, .75, 1.05], .28, [0, time * .006, 0.1], texNebula);

    // 2. Ice Giant with Rings (Left)
    draw(sphere, [-11.2 + drift, 10.5, -64], [6.8, 6.8, 6.8], [1.0, 1.05, 1.15], .16, [0.12, time * 0.025, 0.04], texIce);
    draw(ring, [-11.2 + drift, 10.5, -64], [9.2, 9.2, .20], [.30, .64, .96], .38, [.12, .28, -.12]);

    // 3. Volcanic / Lava Planet with Rings (Right)
    draw(sphere, [12.0, 6.8, -82], [4.6, 4.6, 4.6], [1.1, 0.85, 0.75], .22, [0.08, time * 0.02, -0.05], texLava);
    draw(ring, [12.0, 6.8, -82], [6.2, 6.2, .15], [.95, .45, .15], .28, [.2, .16, .18]);

    // 4. Dreadnought Mothership Boss (Looming high in the distance when approaching Sector 4 or warp)
    const bossGlow = .55 + Math.sin(time * 3.5) * .25;
    const bossSwayX = Math.sin(time * 0.15) * 4.2;
    const bossSwayY = 13.5 + Math.cos(time * 0.22) * 1.2;
    draw(billboardQuad, [bossSwayX, bossSwayY, -85.0], [15.0, 15.0, 1.0], [1.0, 0.9, 0.9], bossGlow, [0, 0, Math.sin(time * 0.15) * 0.05], texMothership);
  }

  function drawShip(time) {
    const x = state.laneX;
    const lean = (LANES[state.lane] - x) * -.13;
    const engineGlow = .65 + Math.sin(time * 9) * .28;
    const spin = mode === 'playing' ? time * 2.2 : 0;

    draw(cube, [x, .12, PLAYER_Z + .03], [.62, .11, 1.22], [.045, .07, .15], .12, [0, lean, 0]);
    draw(shipBody, [x, .24, PLAYER_Z], [.92, .40, 1.82], [.66, .75, .88], .10, [0, lean, 0]);
    draw(cube, [x, .45, PLAYER_Z - .34], [.40, .17, .62], [.035, .12, .30], .48, [0, lean, 0]);
    draw(cube, [x, .455, PLAYER_Z + .03], [.16, .035, 1.26], [.95, .61, .25], .38, [0, lean, 0]);

    for (const side of [-1, 1]) {
      draw(cube, [x + side * .65, .16, PLAYER_Z + .02], [.70, .075, .64], [.16, .27, .47], .18, [0, lean, side * -.08]);
      draw(cube, [x + side * .89, .22, PLAYER_Z - .13], [.12, .15, .38], [.23, .40, .64], .38, [0, lean, side * -.05]);
      draw(cube, [x + side * .40, .16, PLAYER_Z + .81], [.12, .12, .22], [.08, .11, .20], .10);
      draw(sphere, [x + side * .31, .15, PLAYER_Z + .92], [.13, .13, .11], [.34, .68, 1], engineGlow);
      draw(cube, [x + side * .27, .29, PLAYER_Z - .84], [.08, .08, .06], [.72, .94, 1], .9, [0, spin, 0]);
    }
  }

  function drawHazardOrEnergy(item, time) {
    const x = LANES[item.lane];
    const bob = Math.sin(time * 3.3 + item.phase) * .11;
    if (item.type === 'energy') {
      draw(crystalMesh, [x, .55 + bob, item.z], [.38, .52, .38], [1, .62, .16], 1.05, [time * .24, time * .8 + item.phase, time * .15]);
      draw(sphere, [x, .55 + bob, item.z], [.13, .13, .13], [.58, .9, 1], .72);
      return;
    }

    const spin = time * .32 + item.phase;
    // Crater textured asteroid
    draw(asteroidMesh, [x, .34, item.z], [.66, .62, .65], [1.0, 0.78, 0.65], .08, [spin, spin * .7, spin * .4], texCrater);
    draw(sphere, [x + .16, .48, item.z + .51], [.13, .11, .04], [.20, .12, .12], .02);
    draw(sphere, [x - .20, .20, item.z + .48], [.10, .09, .035], [.18, .10, .10], .02);
    draw(sphere, [x + .02, .17, item.z + .57], [.08, .07, .025], [.19, .11, .1], .02);
    draw(ring, [x, .38, item.z], [.86, .86, .13], [1, .12, .20], .92, [.15, .1, spin]);
    draw(cube, [x, 1.04, item.z], [.055, .23, .06], [1, .18, .23], .72, [0, 0, spin]);
    draw(sphere, [x, .88, item.z], [.07, .07, .07], [1, .32, .25], .9);
  }

  function updateHazardWarning() {
    const incoming = objects
      .filter((item) => item.type === 'asteroid' && !item.checked && item.z > -27 && item.z < PLAYER_Z + .55)
      .sort((a, b) => b.z - a.z)[0];
    if (!incoming) {
      ui.hazard.classList.add('hidden');
      return;
    }
    const laneName = ['SOL', 'ORTA', 'SAĞ'][incoming.lane];
    const warning = 'UYARI • ASTEROİT ' + laneName + ' ROTASINDA';
    if (ui.hazard.textContent !== warning) ui.hazard.textContent = warning;
    ui.hazard.classList.remove('hidden');
  }

  function draw(mesh, position, scale, tint, emission = 0, rotation = [0, 0, 0], texture = null) {
    const model = modelMatrix(position, rotation, scale);
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.position);
    gl.enableVertexAttribArray(loc.position);
    gl.vertexAttribPointer(loc.position, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normal);
    gl.enableVertexAttribArray(loc.normal);
    gl.vertexAttribPointer(loc.normal, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.color);
    gl.enableVertexAttribArray(loc.color);
    gl.vertexAttribPointer(loc.color, 3, gl.FLOAT, false, 0, 0);

    if (loc.texCoord >= 0 && mesh.uv) {
      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.uv);
      gl.enableVertexAttribArray(loc.texCoord);
      gl.vertexAttribPointer(loc.texCoord, 2, gl.FLOAT, false, 0, 0);
    }

    if (texture) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(loc.sampler, 0);
      gl.uniform1f(loc.useTexture, 1.0);
    } else {
      gl.uniform1f(loc.useTexture, 0.0);
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.index);
    gl.uniformMatrix4fv(loc.model, false, model);
    gl.uniformMatrix4fv(loc.normalMatrix, false, normalMatrix(model));
    gl.uniform3f(loc.tint, tint[0], tint[1], tint[2]);
    gl.uniform1f(loc.emission, emission);
    gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
  }

  function collectEnergy() {
    state.tickets++;
    state.score += 120;
    showToast(state.tickets % 5 === 0 ? 'ENERJİ SERİSİ • ' + state.tickets : '+1 ENERJİ ÇEKİRDEĞİ');
    sound(760, .09, 'sine', .045);
    if (navigator.vibrate) navigator.vibrate(10);
  }

  function hitAsteroid(item) {
    if (state.invuln > 0) return;
    state.hearts--;
    state.invuln = 1.05;
    state.lastImpact = { name: 'ASTEROİT', lane: ['SOL', 'ORTA', 'SAĞ'][item.lane] };
    ui.game.classList.remove('impact');
    void ui.game.offsetWidth;
    ui.game.classList.add('impact');
    setTimeout(() => ui.game.classList.remove('impact'), 250);
    ui.impact.textContent = 'SON ÇARPIŞMA: ASTEROİT • ' + state.lastImpact.lane + ' ROTA';
    ui.impact.classList.add('collision');
    showToast(state.hearts ? 'ASTEROİT ÇARPTI • ' + state.hearts + ' KALKAN KALDI' : 'ASTEROİT ÇARPTI • KALKANLAR TÜKENDİ');
    sound(145, .16, 'sawtooth', .05);
    if (navigator.vibrate) navigator.vibrate([35, 25, 45]);
    updateHud();
  }

  function updateHud() {
    ui.score.textContent = String(state.score).padStart(6, '0');
    ui.tickets.textContent = state.tickets;
    ui.timer.innerHTML = String(Math.ceil(state.time)) + '<span>s</span>';
    ui.speed.textContent = 'WARP ' + Math.round(state.speed * 4.2) + '%';
    ui.lives.setAttribute('aria-label', state.hearts + ' kalkan kaldı');
    [...ui.lives.children].forEach((heart, i) => {
      heart.classList.toggle('on', i < state.hearts);
      heart.classList.toggle('lost', i >= state.hearts);
    });
    const dateLabel = $('#dateLabel');
    if (dateLabel && dateLabel.textContent !== state.sector) {
      dateLabel.textContent = state.sector;
    }
  }

  function startRun() {
    state = freshState();
    const today = new Date();
    random = seededRandom(today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate());
    objects = [];
    mode = 'playing';
    ui.start.classList.add('hidden');
    ui.pause.classList.add('hidden');
    ui.result.classList.add('hidden');
    ui.hud.classList.add('visible');
    ui.bottom.classList.add('visible');
    ui.station.classList.add('dim');
    ui.hazard.classList.add('hidden');
    ui.impact.textContent = 'TEMİZ UÇUŞ • ASTEROİT TEMASI YOK';
    ui.impact.classList.remove('collision');
    updateHud();
    sound(450, .1, 'triangle', .035);
  }

  function pauseRun() {
    if (mode !== 'playing') return;
    mode = 'paused';
    ui.pause.classList.remove('hidden');
  }

  function resumeRun() {
    if (mode !== 'paused') return;
    mode = 'playing';
    ui.pause.classList.add('hidden');
    lastFrame = 0;
  }

  function finishRun() {
    if (mode !== 'playing') return;
    mode = 'result';
    const best = Math.max(Number(safeGet(BEST_KEY, '0') || 0), state.score);
    safeSet(BEST_KEY, String(best));
    ui.best.textContent = String(best).padStart(6, '0');
    ui.final.textContent = String(state.score).padStart(6, '0');
    ui.finalTickets.textContent = String(state.tickets);
    ui.impact.textContent = state.lastImpact ? 'SON ÇARPIŞMA: ' + state.lastImpact.name + ' • ' + state.lastImpact.lane + ' ROTA' : 'TEMİZ UÇUŞ • ASTEROİT TEMASI YOK';
    ui.impact.classList.toggle('collision', Boolean(state.lastImpact));
    ui.finalBest.textContent = String(best).padStart(6, '0');
    ui.resultTitle.textContent = state.hearts ? 'Sektör güvenle geçildi.' : 'Asteroit çarpışmalarında kalkanların tükendi.';
    ui.result.classList.remove('hidden');
    ui.hazard.classList.add('hidden');
    ui.hud.classList.remove('visible');
    ui.bottom.classList.remove('visible');
    sound(state.hearts ? 540 : 220, .22, 'sine', .05);
    orbitRunCount++;
    syncOrbitAdButtons();
    if (window.ElockmanAdMob) window.ElockmanAdMob.maybeInterstitial(orbitRunCount);
  }
  function syncOrbitAdButtons() {
    const canRw = window.ElockmanAdMob ? window.ElockmanAdMob.canReward() : true;
    if (ui.reviveAd) {
      ui.reviveAd.classList.toggle('hidden', !(state.hearts <= 0 && !state.revived && canRw));
    }
    if (ui.doubleCoresAd) {
      ui.doubleCoresAd.classList.toggle('hidden', !(state.tickets > 0 && !state.doubledCores && canRw));
    }
  }
  if (ui.reviveAd) {
    ui.reviveAd.addEventListener('click', () => {
      if (!window.ElockmanAdMob || state.revived) return;
      window.ElockmanAdMob.showRewarded(() => {
        state.revived = true;
        state.hearts = 1;
        state.invuln = 2.5;
        if (state.time <= 3) state.time = 15;
        objects = objects.filter((o) => o.z < PLAYER_Z - 3.5);
        mode = 'playing';
        ui.result.classList.add('hidden');
        ui.hud.classList.add('visible');
        ui.bottom.classList.add('visible');
        lastFrame = 0;
        updateHud();
        showToast('KALKAN YENİLENDİ!');
      });
    });
  }
  if (ui.doubleCoresAd) {
    ui.doubleCoresAd.addEventListener('click', () => {
      if (!window.ElockmanAdMob || state.doubledCores || state.tickets <= 0) return;
      window.ElockmanAdMob.showRewarded(() => {
        state.doubledCores = true;
        state.tickets *= 2;
        state.score += Math.floor(state.tickets * 60);
        ui.finalTickets.textContent = String(state.tickets);
        ui.final.textContent = String(state.score).padStart(6, '0');
        const best = Math.max(Number(safeGet(BEST_KEY, '0') || 0), state.score);
        safeSet(BEST_KEY, String(best));
        ui.best.textContent = String(best).padStart(6, '0');
        ui.finalBest.textContent = String(best).padStart(6, '0');
        syncOrbitAdButtons();
        showToast('ÇEKİRDEK 2 KATINA ÇIKTI!');
      });
    });
  }

  function showToast(message) {
    ui.toast.textContent = message;
    ui.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 1050);
  }

  $('#startButton').addEventListener('click', startRun);
  $('#resumeButton').addEventListener('click', resumeRun);
  $('#pauseButton').addEventListener('click', pauseRun);
  $('#restartButton').addEventListener('click', startRun);
  $('#againButton').addEventListener('click', startRun);
  $('#homeButton').addEventListener('click', showHome);
  $('#leftButton').addEventListener('click', () => moveLane(-1));
  $('#rightButton').addEventListener('click', () => moveLane(1));
  ui.sound.addEventListener('click', toggleSound);
  ui.sound.classList.toggle('off', !soundOn);
  ui.sound.setAttribute('aria-label', soundOn ? 'Sesi kapat' : 'Sesi aç');
  updateBestOnHome();
  createDateLabel();

  let pointerStart = null;
  canvas.addEventListener('pointerdown', (event) => {
    pointerStart = { x: event.clientX, y: event.clientY };
    try { canvas.setPointerCapture(event.pointerId); } catch {}
  });
  canvas.addEventListener('pointerup', (event) => {
    if (!pointerStart || mode !== 'playing') { pointerStart = null; return; }
    const dx = event.clientX - pointerStart.x, dy = event.clientY - pointerStart.y;
    if (Math.abs(dx) > 24 && Math.abs(dx) > Math.abs(dy)) moveLane(dx < 0 ? -1 : 1);
    else if (Math.abs(dx) < 12) moveLane(event.clientX < window.innerWidth / 2 ? -1 : 1);
    pointerStart = null;
  });
  canvas.addEventListener('pointercancel', () => { pointerStart = null; });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') { event.preventDefault(); moveLane(-1); }
    if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') { event.preventDefault(); moveLane(1); }
    if ((event.code === 'Space' || event.key.toLowerCase() === 'p') && mode === 'playing') { event.preventDefault(); pauseRun(); }
    else if ((event.code === 'Space' || event.key.toLowerCase() === 'p') && mode === 'paused') { event.preventDefault(); resumeRun(); }
    if (event.key === 'Enter' && mode === 'menu') startRun();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && mode === 'playing') pauseRun();
  });
  window.addEventListener('contextmenu', (event) => event.preventDefault());

  function showHome() {
    mode = 'menu';
    ui.result.classList.add('hidden');
    ui.start.classList.remove('hidden');
    ui.hud.classList.remove('visible');
    ui.bottom.classList.remove('visible');
    ui.station.classList.remove('dim');
    ui.hazard.classList.add('hidden');
  }
  requestAnimationFrame(function initialFrame(now) { lastFrame = now; requestAnimationFrame(frame); });
}

function loadTexture(context, url) {
  const texture = context.createTexture();
  context.bindTexture(context.TEXTURE_2D, texture);
  // Default placeholder pixel (deep blue nebula)
  context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, 1, 1, 0, context.RGBA, context.UNSIGNED_BYTE, new Uint8Array([15, 24, 48, 255]));

  const image = new Image();
  image.onload = () => {
    context.bindTexture(context.TEXTURE_2D, texture);
    context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, image);
    context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.REPEAT);
    context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.REPEAT);
    context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR_MIPMAP_LINEAR);
    context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
    context.generateMipmap(context.TEXTURE_2D);
  };
  image.src = url;
  return texture;
}

function buildEnvironment(context) {
  const builder = new MeshBuilder();
  const segmentLength = 8;
  const count = 27;
  const routeBounds = [-2.22, -.74, .74, 2.22];
  for (let s = 0; s < count; s++) {
    const center = 8 - s * segmentLength;
    const pattern = s % 12;
    builder.box(0, -.72, center, 8.4, .15, 7.5, pattern % 3 === 0 ? [.045, .060, .14] : [.032, .047, .12]);
    builder.box(-4.12, -.59, center, .12, .13, 7.4, [.10, .15, .30]);
    builder.box(4.12, -.59, center, .12, .13, 7.4, [.10, .15, .30]);

    for (let lane = 0; lane < routeBounds.length; lane++) {
      const color = lane === 1 ? [.16, .54, .86] : lane === 0 ? [.40, .25, .78] : [.90, .49, .19];
      builder.box(routeBounds[lane], -.615, center, .035, .025, 7.1, color);
    }
    for (let t = 0; t < 3; t++) {
      const markerZ = center - 2.5 + t * 2.5;
      builder.box(0, -.625, markerZ, 7.8, .022, .09, pattern % 4 === 0 ? [.19, .28, .48] : [.09, .14, .27]);
      for (const laneX of LANES) builder.box(laneX, -.60, markerZ, .70, .026, .075, [.10, .31, .55]);
    }

    if (pattern % 3 === 0) {
      const portal = pattern === 0 ? [.62, .30, .92] : [.28, .45, .75];
      builder.box(-4.1, .38, center, .10, 2.0, .12, portal);
      builder.box(4.1, .38, center, .10, 2.0, .12, portal);
      builder.box(0, 1.38, center, 8.2, .08, .12, portal);
      builder.box(-3.85, 1.18, center, .30, .035, .44, [.94, .61, .25]);
      builder.box(3.85, 1.18, center, .30, .035, .44, [.94, .61, .25]);
    }

    for (let n = 0; n < 14; n++) {
      const seed = (s * 97 + n * 53 + 31) % 997;
      let starX = (seed / 997) * 29 - 14.5;
      if (Math.abs(starX) < 5.1) starX += starX < 0 ? -5.4 : 5.4;
      const starY = -1.4 + ((s * 37 + n * 71) % 142) / 10;
      const starZ = center - 3.4 + ((n * 17) % 68) / 10;
      const size = .018 + (n % 4) * .009;
      const color = n % 7 === 0 ? [1, .70, .39] : n % 3 === 0 ? [.43, .75, 1] : [.72, .82, 1];
      builder.box(starX, starY, starZ, size, size, size, color);
    }
  }
  return builder.upload(context);
}

class MeshBuilder {
  constructor() { this.positions = []; this.normals = []; this.colors = []; this.uvs = []; this.indices = []; }
  box(cx, cy, cz, sx, sy, sz, color) {
    const base = this.positions.length / 3;
    for (let i = 0; i < CUBE_POS.length; i += 3) {
      this.positions.push(CUBE_POS[i] * sx + cx, CUBE_POS[i + 1] * sy + cy, CUBE_POS[i + 2] * sz + cz);
      this.normals.push(CUBE_NORM[i], CUBE_NORM[i + 1], CUBE_NORM[i + 2]);
      this.colors.push(color[0], color[1], color[2]);
    }
    for (let u = 0; u < CUBE_UV.length; u++) this.uvs.push(CUBE_UV[u]);
    for (const index of CUBE_INDEX) this.indices.push(base + index);
  }
  upload(context) { return uploadMesh(context, this.positions, this.normals, this.colors, this.indices, this.uvs); }
}

function makeShipBody(context) {
  const vertices = [
    [-.50,-.50,.50], [.50,-.50,.50], [.50,.50,.50], [-.50,.50,.50],
    [-.25,-.39,-.50], [.25,-.39,-.50], [.25,.34,-.50], [-.25,.34,-.50]
  ];
  const faces = [
    [[0,1,2,3], [0,0,1]], [[5,4,7,6], [0,0,-1]],
    [[3,2,6,7], [0,1,0]], [[4,5,1,0], [0,-1,0]],
    [[1,5,6,2], [1,0,0]], [[4,0,3,7], [-1,0,0]]
  ];
  const positions = [], normals = [], colors = [], uvs = [], indices = [];
  for (const [face, normal] of faces) {
    const base = positions.length / 3;
    for (const index of face) {
      positions.push(...vertices[index]);
      normals.push(...normal);
      colors.push(1, 1, 1);
    }
    uvs.push(0, 0, 1, 0, 1, 1, 0, 1);
    indices.push(base, base+1, base+2, base, base+2, base+3);
  }
  return uploadMesh(context, positions, normals, colors, indices, uvs);
}

function makeAsteroid(context, rings, segments) {
  const positions = [], normals = [], colors = [], uvs = [], indices = [];
  for (let y = 0; y <= rings; y++) {
    const theta = y / rings * Math.PI;
    for (let x = 0; x <= segments; x++) {
      const phi = x / segments * Math.PI * 2;
      const rawX = -Math.cos(phi) * Math.sin(theta);
      const rawY = Math.cos(theta);
      const rawZ = Math.sin(phi) * Math.sin(theta);
      const rock = .82 + .11 * Math.sin(phi * 3.1 + theta * 4.7) + .07 * Math.cos(phi * 5.3 - theta * 2.9);
      const px = rawX * rock, py = rawY * rock, pz = rawZ * rock;
      positions.push(px, py, pz);
      const normal = normalize([rawX * (1 + .1 * Math.sin(phi * 2)), rawY, rawZ * (1 + .1 * Math.cos(theta * 3))]);
      normals.push(normal[0], normal[1], normal[2]);
      colors.push(1, 1, 1);
      uvs.push(x / segments, y / rings);
    }
  }
  for (let y = 0; y < rings; y++) for (let x = 0; x < segments; x++) {
    const a = y * (segments + 1) + x, b = a + segments + 1;
    indices.push(a, b, a + 1, b, b + 1, a + 1);
  }
  return uploadMesh(context, positions, normals, colors, indices, uvs);
}

function makeCrystal(context) {
  const v = [[0,.62,0], [.46,0,0], [0,0,.46], [-.46,0,0], [0,0,-.46], [0,-.62,0]];
  const faces = [[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,2,1],[5,3,2],[5,4,3],[5,1,4]];
  const positions = [], normals = [], colors = [], uvs = [], indices = [];
  for (const face of faces) {
    let a = v[face[0]], b = v[face[1]], c = v[face[2]];
    let normal = normalize(cross([b[0]-a[0], b[1]-a[1], b[2]-a[2]], [c[0]-a[0], c[1]-a[1], c[2]-a[2]]));
    const center = [(a[0]+b[0]+c[0])/3, (a[1]+b[1]+c[1])/3, (a[2]+b[2]+c[2])/3];
    if (dot(normal, center) < 0) { const swap = b; b = c; c = swap; normal = [-normal[0], -normal[1], -normal[2]]; }
    const base = positions.length / 3;
    for (const point of [a,b,c]) { positions.push(point[0],point[1],point[2]); normals.push(normal[0],normal[1],normal[2]); colors.push(1,1,1); }
    uvs.push(0.5, 0, 0, 1, 1, 1);
    indices.push(base,base+1,base+2);
  }
  return uploadMesh(context, positions, normals, colors, indices, uvs);
}

function makeCube(context) {
  return uploadMesh(context, CUBE_POS, CUBE_NORM, Array(24).fill([1, 1, 1]).flat(), CUBE_INDEX, CUBE_UV);
}

function makeSphere(context, rings, segments) {
  const p = [], n = [], c = [], uvs = [], ix = [];
  for (let y = 0; y <= rings; y++) {
    const v = y / rings, theta = v * Math.PI;
    for (let x = 0; x <= segments; x++) {
      const u = x / segments, phi = u * Math.PI * 2;
      const px = -Math.cos(phi) * Math.sin(theta), py = Math.cos(theta), pz = Math.sin(phi) * Math.sin(theta);
      p.push(px, py, pz); n.push(px, py, pz); c.push(1, 1, 1);
      uvs.push(u, v);
    }
  }
  for (let y = 0; y < rings; y++) for (let x = 0; x < segments; x++) {
    const a = y * (segments + 1) + x, b = a + segments + 1;
    ix.push(a, b, a + 1, b, b + 1, a + 1);
  }
  return uploadMesh(context, p, n, c, ix, uvs);
}

function makeCylinder(context, segments) {
  const p = [], n = [], c = [], uvs = [], ix = [];
  for (let i = 0; i <= segments; i++) {
    const u = i / segments, a = u * Math.PI * 2, x = Math.cos(a), z = Math.sin(a);
    p.push(x, -.5, z, x, .5, z); n.push(x, 0, z, x, 0, z); c.push(1, 1, 1, 1, 1, 1);
    uvs.push(u, 0, u, 1);
  }
  for (let i = 0; i < segments; i++) {
    const a = i * 2; ix.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  return uploadMesh(context, p, n, c, ix, uvs);
}

function makeTorus(context, majorSegments, minorSegments) {
  const p = [], n = [], c = [], uvs = [], ix = [];
  for (let i = 0; i <= majorSegments; i++) {
    const u = i / majorSegments, phi = u * Math.PI * 2;
    for (let j = 0; j <= minorSegments; j++) {
      const v = j / minorSegments, theta = v * Math.PI * 2, ring = .76 + .24 * Math.cos(theta);
      const x = Math.cos(phi) * ring, y = Math.sin(phi) * ring, z = .24 * Math.sin(theta);
      p.push(x, y, z); n.push(Math.cos(phi) * Math.cos(theta), Math.sin(phi) * Math.cos(theta), Math.sin(theta)); c.push(1, 1, 1);
      uvs.push(u, v);
    }
  }
  for (let i = 0; i < majorSegments; i++) for (let j = 0; j < minorSegments; j++) {
    const a = i * (minorSegments + 1) + j, b = a + minorSegments + 1;
    ix.push(a, b, a + 1, b, b + 1, a + 1);
  }
  return uploadMesh(context, p, n, c, ix, uvs);
}

function makeBillboardQuad(context) {
  const p = [
    -1, -1, 0,
     1, -1, 0,
     1,  1, 0,
    -1,  1, 0
  ];
  const n = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
  ];
  const c = [
    1, 1, 1,
    1, 1, 1,
    1, 1, 1,
    1, 1, 1
  ];
  const uvs = [
    0, 1,
    1, 1,
    1, 0,
    0, 0
  ];
  const ix = [0, 1, 2, 0, 2, 3];
  return uploadMesh(context, p, n, c, ix, uvs);
}

const CUBE_POS = [
  -.5,-.5,.5, .5,-.5,.5, .5,.5,.5, -.5,.5,.5,
  .5,-.5,-.5, -.5,-.5,-.5, -.5,.5,-.5, .5,.5,-.5,
  -.5,.5,.5, .5,.5,.5, .5,.5,-.5, -.5,.5,-.5,
  -.5,-.5,-.5, .5,-.5,-.5, .5,-.5,.5, -.5,-.5,.5,
  .5,-.5,.5, .5,-.5,-.5, .5,.5,-.5, .5,.5,.5,
  -.5,-.5,-.5, -.5,-.5,.5, -.5,.5,.5, -.5,.5,-.5
];
const CUBE_NORM = [
  0,0,1, 0,0,1, 0,0,1, 0,0,1, 0,0,-1, 0,0,-1, 0,0,-1, 0,0,-1,
  0,1,0, 0,1,0, 0,1,0, 0,1,0, 0,-1,0, 0,-1,0, 0,-1,0, 0,-1,0,
  1,0,0, 1,0,0, 1,0,0, 1,0,0, -1,0,0, -1,0,0, -1,0,0, -1,0,0
];
const CUBE_UV = [
  0,0, 1,0, 1,1, 0,1,
  0,0, 1,0, 1,1, 0,1,
  0,0, 1,0, 1,1, 0,1,
  0,0, 1,0, 1,1, 0,1,
  0,0, 1,0, 1,1, 0,1,
  0,0, 1,0, 1,1, 0,1
];
const CUBE_INDEX = [];
for (let face = 0; face < 6; face++) {
  const o = face * 4;
  CUBE_INDEX.push(o, o + 1, o + 2, o, o + 2, o + 3);
}

function uploadMesh(context, positions, normals, colors, indices, uvs = null) {
  const position = context.createBuffer(), normal = context.createBuffer(), color = context.createBuffer(), index = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, position);
  context.bufferData(context.ARRAY_BUFFER, new Float32Array(positions), context.STATIC_DRAW);

  context.bindBuffer(context.ARRAY_BUFFER, normal);
  context.bufferData(context.ARRAY_BUFFER, new Float32Array(normals), context.STATIC_DRAW);

  context.bindBuffer(context.ARRAY_BUFFER, color);
  context.bufferData(context.ARRAY_BUFFER, new Float32Array(colors), context.STATIC_DRAW);

  let uv = null;
  if (uvs && uvs.length) {
    uv = context.createBuffer();
    context.bindBuffer(context.ARRAY_BUFFER, uv);
    context.bufferData(context.ARRAY_BUFFER, new Float32Array(uvs), context.STATIC_DRAW);
  }

  context.bindBuffer(context.ELEMENT_ARRAY_BUFFER, index);
  context.bufferData(context.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), context.STATIC_DRAW);
  return { position, normal, color, uv, index, count: indices.length };
}

function createProgram(context, vertexSource, fragmentSource) {
  const compile = (type, source) => {
    const shader = context.createShader(type);
    context.shaderSource(shader, source); context.compileShader(shader);
    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      console.error(context.getShaderInfoLog(shader)); context.deleteShader(shader); return null;
    }
    return shader;
  };
  const vertex = compile(context.VERTEX_SHADER, vertexSource), fragment = compile(context.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return null;
  const result = context.createProgram();
  context.attachShader(result, vertex); context.attachShader(result, fragment); context.linkProgram(result);
  if (!context.getProgramParameter(result, context.LINK_STATUS)) { console.error(context.getProgramInfoLog(result)); return null; }
  return result;
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
  viewport.width = window.innerWidth; viewport.height = window.innerHeight;
  viewport.aspect = viewport.width / Math.max(1, viewport.height);
  canvas.width = Math.round(viewport.width * dpr); canvas.height = Math.round(viewport.height * dpr);
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
}

function moveLane(direction) {
  if (mode !== 'playing') return;
  state.lane = Math.max(0, Math.min(2, state.lane + direction));
  sound(320 + state.lane * 45, .045, 'triangle', .014);
}

function sound(frequency, duration, shape = 'sine', volume = .03) {
  if (!soundOn) return;
  try {
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator(), gain = audioCtx.createGain();
    oscillator.type = shape; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + duration);
    oscillator.connect(gain); gain.connect(audioCtx.destination);
    oscillator.start(); oscillator.stop(audioCtx.currentTime + duration);
  } catch { /* Optional sound never blocks a run. */ }
}

function toggleSound() {
  soundOn = !soundOn;
  safeSet('elockman-orbit-sound', soundOn ? 'on' : 'off');
  ui.sound.classList.toggle('off', !soundOn);
  ui.sound.setAttribute('aria-label', soundOn ? 'Sesi kapat' : 'Sesi aç');
}

function updateBestOnHome() {
  ui.best.textContent = String(Number(safeGet(BEST_KEY, '0') || 0)).padStart(6, '0');
}

function createDateLabel() {
  const day = new Date(), dayNum = String(day.getDate()).padStart(2, '0');
  const month = ['OCAK','ŞUB','MAR','NİS','MAY','HAZ','TEM','AĞU','EYL','EKİ','KAS','ARA'][day.getMonth()];
  $('#dateLabel').textContent = 'SEKTÖR 01 • ' + dayNum + ' ' + month;
}

function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2), nf = 1 / (near - far);
  return new Float32Array([f/aspect,0,0,0, 0,f,0,0, 0,0,(far+near)*nf,-1, 0,0,2*far*near*nf,0]);
}

function lookAt(eye, center, up) {
  const z = normalize([eye[0]-center[0], eye[1]-center[1], eye[2]-center[2]]);
  const x = normalize(cross(up, z)), y = cross(z, x);
  return new Float32Array([x[0],y[0],z[0],0, x[1],y[1],z[1],0, x[2],y[2],z[2],0, -dot(x,eye),-dot(y,eye),-dot(z,eye),1]);
}

function modelMatrix(position, rotation, scale) {
  const [x, y, z] = position, [rx, ry, rz] = rotation, [sx, sy, sz] = scale;
  const t = new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1]);
  const rxm = new Float32Array([1,0,0,0, 0,Math.cos(rx),Math.sin(rx),0, 0,-Math.sin(rx),Math.cos(rx),0, 0,0,0,1]);
  const rym = new Float32Array([Math.cos(ry),0,-Math.sin(ry),0, 0,1,0,0, Math.sin(ry),0,Math.cos(ry),0, 0,0,0,1]);
  const rzm = new Float32Array([Math.cos(rz),Math.sin(rz),0,0, -Math.sin(rz),Math.cos(rz),0,0, 0,0,1,0, 0,0,0,1]);
  const sm = new Float32Array([sx,0,0,0, 0,sy,0,0, 0,0,sz,0, 0,0,0,1]);
  return multiply(multiply(multiply(multiply(t, rzm), rym), rxm), sm);
}

function normalMatrix(m) {
  const x = Math.hypot(m[0], m[1], m[2]) || 1, y = Math.hypot(m[4], m[5], m[6]) || 1, z = Math.hypot(m[8], m[9], m[10]) || 1;
  const out = new Float32Array(m);
  out[0]/=x; out[1]/=x; out[2]/=x; out[4]/=y; out[5]/=y; out[6]/=y; out[8]/=z; out[9]/=z; out[10]/=z;
  return out;
}

function multiply(a, b) {
  const out = new Float32Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    out[c*4+r] = a[r]*b[c*4] + a[4+r]*b[c*4+1] + a[8+r]*b[c*4+2] + a[12+r]*b[c*4+3];
  }
  return out;
}

function normalize(a) { const m = Math.hypot(a[0],a[1],a[2]) || 1; return [a[0]/m,a[1]/m,a[2]/m]; }
function cross(a,b) { return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; }
function dot(a,b) { return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }

boot();
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

function safeGet(key, fallback) {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}

function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Private browsing can disable storage. */ }
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

// Studio Intro Animation (Official Cinematic Video + Branded Splash Logo)
(function studioIntro() {
  const el = document.getElementById('studio');
  if (!el) return;
  if (/[?&](nostudio|arena)/.test(location.search)) { el.remove(); return; }
  const vid = document.getElementById('studio-video');
  let seen = false;
  try {
    seen = sessionStorage.getItem('elockman_orbit_studio') === '1';
    sessionStorage.setItem('elockman_orbit_studio', '1');
  } catch (e) {}

  if (seen) {
    el.remove();
    return;
  }

  let done = false;
  const end = () => {
    if (done) return;
    done = true;
    if (vid) { try { vid.pause(); } catch (e) {} }
    el.classList.add('out', 'hide');
    setTimeout(() => {
      el.classList.add('gone');
      setTimeout(() => el.remove(), 400);
    }, 500);
  };

  if (vid) {
    vid.muted = true;
    vid.defaultMuted = true;
    const show = () => vid.classList.add('is-playing');
    vid.addEventListener('playing', show, { once: true });
    vid.addEventListener('timeupdate', () => {
      if (vid.currentTime > 0) show();
    }, { once: true });
    setTimeout(show, 1200);
    const p = vid.play();
    if (p !== undefined) p.catch(() => {});
    vid.addEventListener('ended', end);
    vid.addEventListener('error', end);
    setTimeout(end, 8500);
  } else {
    setTimeout(end, 2600);
  }

  el.addEventListener('click', end);
  el.addEventListener('touchstart', end, { passive: true });
})();

