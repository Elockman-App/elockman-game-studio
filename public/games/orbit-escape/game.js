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
  combo: $('#comboPill'),
  speed: $('#speedText'), station: $('#stationSign'), best: $('#bestScore'), game: $('#game'), hazard: $('#hazardWarning'), impact: $('#lastImpact'),
  final: $('#finalScore'), finalTickets: $('#finalTickets'), finalBest: $('#finalBest'),
  resultTitle: $('#resultTitle'), sound: $('#soundButton'), fallback: $('#fallback'),
  reviveAd: $('#reviveAdButton'), doubleCoresAd: $('#doubleCoresAdButton'),
  // Hipodrom Ahiri standard settings & hangar UI
  settingsButton: $('#settingsButton'),
  settingsModal: $('#settingsModal'),
  settingsBackdrop: $('#settingsBackdrop'),
  closeSettings: $('#closeSettingsButton'),
  saveSettings: $('#saveSettingsButton'),
  setMasterToggle: $('#setMasterToggle'),
  setMasterRange: $('#setMasterRange'),
  setMasterVal: $('#setMasterVal'),
  setMusicRange: $('#setMusicRange'),
  setMusicVal: $('#setMusicVal'),
  setSfxRange: $('#setSfxRange'),
  setSfxVal: $('#setSfxVal'),
  setAmbienceRange: $('#setAmbienceRange'),
  setAmbienceVal: $('#setAmbienceVal'),
  setHapticsToggle: $('#setHapticsToggle'),
  pauseSettingsButton: $('#pauseSettingsButton'),
  startHangarButton: $('#startHangarButton'),
  hangarModal: $('#hangarModal'),
  hangarBackdrop: $('#hangarBackdrop'),
  closeHangar: $('#closeHangarButton'),
  confirmShip: $('#confirmShipButton'),
  hangarGrid: $('#hangarGrid'),
  activeShipImg: $('#activeShipImg'),
  activeShipName: $('#activeShipName')
};
const LANES = [-1.45, 0, 1.45];
const PLAYER_Z = 2.15;
const RUN_SECONDS = 45;
const BEST_KEY = 'elockman-orbit-best-v1';
const REDUCED_MOTION = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let mode = 'menu';
let lastFrame = 0;

// Hipodrom Ahiri standard audio settings architecture
const audioSettings = {
  sound: safeGet('elockman-orbit-sound', 'on') !== 'off',
  master: Number(safeGet('elockman-orbit-vol-master', '85')),
  music: Number(safeGet('elockman-orbit-vol-music', '70')),
  sfx: Number(safeGet('elockman-orbit-vol-sfx', '80')),
  ambience: Number(safeGet('elockman-orbit-vol-ambience', '65')),
  haptics: safeGet('elockman-orbit-haptics', 'on') !== 'off'
};
let soundOn = audioSettings.sound;

// 4 Distinct Selectable Spacecraft Fleet
const SHIPS = [
  {
    id: 0,
    name: 'Swift Interceptor',
    code: 'NX-01 INTERCEPTOR',
    role: 'Hızlı & Çevik Avcı (Mavi/Beyaz)',
    desc: 'Yüksek manevra kabiliyeti ve çift turkuaz plazma iticili aerodinamik avcı.',
    texturePath: 'textures/ship_1.png',
    thrustColor: [0.25, 0.85, 1.0],
    accentHex: '#72ddff',
    speed: 95,
    agility: 92,
    shield: 70
  },
  {
    id: 1,
    name: 'Crimson Striker',
    code: 'CR-07 STRIKER',
    role: 'Ağır Taarruz Gemisi (Kırmızı)',
    desc: 'Kızıl alaşımlı zırh ve aşırı yüklemeli kor afterburner motorları.',
    texturePath: 'textures/ship_2.png',
    thrustColor: [1.0, 0.38, 0.10],
    accentHex: '#ff4c3b',
    speed: 90,
    agility: 78,
    shield: 88
  },
  {
    id: 2,
    name: 'Shadow Ghost',
    code: 'GH-99 STEALTH',
    role: 'Siber Hayalet (Siyah/Yeşil)',
    desc: 'Radar emici mat karbon gövde ve düşük sürtünmeli iyon sürücüsü.',
    texturePath: 'textures/ship_3.png',
    thrustColor: [0.15, 1.0, 0.55],
    accentHex: '#00ff88',
    speed: 88,
    agility: 96,
    shield: 75
  },
  {
    id: 3,
    name: 'Void Vanguard',
    code: 'VV-04 DREADNOUGHT',
    role: 'Hiçlik Muhafızı (Mor/Altın)',
    desc: 'Kraliyet moru titanyum şasi ve takviyeli kalkan jeneratör matrisi.',
    texturePath: 'textures/ship_4.png',
    thrustColor: [0.85, 0.35, 1.0],
    accentHex: '#c084fc',
    speed: 82,
    agility: 72,
    shield: 100
  }
];

let selectedShip = parseInt(safeGet('elockman-orbit-ship', '0'), 10);
if (isNaN(selectedShip) || selectedShip < 0 || selectedShip >= SHIPS.length) selectedShip = 0;

let toastTimer = 0;
let state = freshState();
let objects = [];
let random = Math.random;
let viewport = { width: 1, height: 1, aspect: 1 };
let orbitRunCount = 0;

// --- Pre-allocated Zero-Allocation Matrix Scratch Buffers ---
const _matPersp = new Float32Array(16);
const _matView = new Float32Array(16);
const _matVP = new Float32Array(16);
const _matModel = new Float32Array(16);
const _matNormal = new Float32Array(16);
const _matTmpA = new Float32Array(16);
const _matTmpB = new Float32Array(16);
const _matT = new Float32Array(16);
const _matRx = new Float32Array(16);
const _matRy = new Float32Array(16);
const _matRz = new Float32Array(16);
const _matS = new Float32Array(16);

// --- Zero-Allocation 3D Particle & Warp Streak Pools ---
const PARTICLE_POOL_SIZE = 96;
const particles = Array.from({ length: PARTICLE_POOL_SIZE }, () => ({
  active: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
  life: 0, maxLife: 1, size: 0.08, r: 1, g: 1, b: 1, emission: 1.1
}));
let particleCursor = 0;

const STREAK_COUNT = 34;
const warpStreaks = Array.from({ length: STREAK_COUNT }, (_, i) => ({
  x: ((i % 2 === 0 ? -1 : 1) * (4.4 + ((i * 19) % 45) / 10)),
  y: -1.2 + ((i * 37) % 90) / 10,
  z: -((i * 7) % 80),
  speedMul: 1.4 + (i % 5) * 0.25,
  color: i % 3 === 0 ? [0.45, 0.88, 1.0] : i % 5 === 0 ? [1.0, 0.76, 0.35] : [0.72, 0.84, 1.0]
}));

// --- Web Audio Mixing Graph (Master <- MusicDuck, SFX, Ambience, UI) ---
const audio = {
  ctx: null,
  master: null,
  musicBus: null,
  musicDuck: null,
  sfxBus: null,
  ambienceBus: null,
  uiBus: null,
  noiseBuf: null,
  engineOsc1: null,
  engineOsc2: null,
  engineFilter: null,
  engineGain: null,
  musicTimer: null,
  musicStep: 0
};

function applyAudioSettings() {
  soundOn = audioSettings.sound;
  if (ui.sound) {
    ui.sound.classList.toggle('off', !soundOn);
    ui.sound.textContent = soundOn ? '♫' : '✕';
    ui.sound.setAttribute('aria-label', soundOn ? 'Sesi kapat' : 'Sesi aç');
  }
  if (!audio.ctx) return;
  const masterVal = soundOn ? (audioSettings.master / 100) * 0.85 : 0;
  if (audio.master) {
    audio.master.gain.setTargetAtTime(masterVal, audio.ctx.currentTime, 0.04);
  }
  if (audio.musicBus) {
    audio.musicBus.gain.setTargetAtTime((audioSettings.music / 100) * 0.25, audio.ctx.currentTime, 0.04);
  }
  if (audio.sfxBus) {
    audio.sfxBus.gain.setTargetAtTime((audioSettings.sfx / 100) * 0.70, audio.ctx.currentTime, 0.04);
  }
  if (audio.ambienceBus) {
    audio.ambienceBus.gain.setTargetAtTime((audioSettings.ambience / 100) * 0.30, audio.ctx.currentTime, 0.04);
  }
}

function ensureAudio() {
  if (!soundOn) return null;
  try {
    if (!audio.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      const ctx = new Ctx();
      audio.ctx = ctx;

      audio.master = ctx.createGain();
      audio.master.gain.value = soundOn ? (audioSettings.master / 100) * 0.85 : 0;
      audio.master.connect(ctx.destination);

      audio.musicDuck = ctx.createGain();
      audio.musicDuck.gain.value = 1.0;
      audio.musicDuck.connect(audio.master);

      audio.musicBus = ctx.createGain();
      audio.musicBus.gain.value = (audioSettings.music / 100) * 0.25;
      audio.musicBus.connect(audio.musicDuck);

      audio.sfxBus = ctx.createGain();
      audio.sfxBus.gain.value = (audioSettings.sfx / 100) * 0.70;
      audio.sfxBus.connect(audio.master);

      audio.ambienceBus = ctx.createGain();
      audio.ambienceBus.gain.value = (audioSettings.ambience / 100) * 0.30;
      audio.ambienceBus.connect(audio.master);

      audio.uiBus = ctx.createGain();
      audio.uiBus.gain.value = 0.45;
      audio.uiBus.connect(audio.master);

      // Shared white-noise buffer for impact crunches & thruster whooshes
      const len = Math.floor(ctx.sampleRate * 0.4);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
      audio.noiseBuf = buf;
    }
    if (audio.ctx.state === 'suspended') audio.ctx.resume().catch(() => {});
    return audio.ctx;
  } catch {
    return null;
  }
}

function startEngineAndMusic() {
  const ctx = ensureAudio();
  if (!ctx) return;
  try {
    if (!audio.engineOsc1) {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      osc1.frequency.value = 54;
      osc2.frequency.value = 108;
      filter.type = 'lowpass';
      filter.frequency.value = 240;
      filter.Q.value = 2.4;
      gain.gain.value = 0.0001;
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(audio.ambienceBus);
      osc1.start();
      osc2.start();
      audio.engineOsc1 = osc1;
      audio.engineOsc2 = osc2;
      audio.engineFilter = filter;
      audio.engineGain = gain;
    }
    const now = ctx.currentTime;
    audio.engineGain.gain.cancelScheduledValues(now);
    audio.engineGain.gain.setTargetAtTime(0.18, now, 0.15);

    if (!audio.musicTimer) {
      const scale = [110, 130.81, 146.83, 164.81, 196.0, 220.0, 261.63, 293.66];
      const pattern = [0, 2, 4, 5, 4, 2, 3, 1];
      audio.musicTimer = setInterval(() => {
        if (!soundOn || mode !== 'playing' || !audio.ctx || audio.ctx.state !== 'running') return;
        const t = audio.ctx.currentTime;
        const note = scale[pattern[audio.musicStep % pattern.length]];
        const sectorShift = state.sectorIdx === 2 ? 1.06 : state.sectorIdx === 3 ? 1.12 : 1.0;
        const osc = audio.ctx.createOscillator();
        const g = audio.ctx.createGain();
        osc.type = audio.musicStep % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(note * sectorShift, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.14, t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        osc.connect(g);
        g.connect(audio.musicBus);
        osc.start(t);
        osc.stop(t + 0.24);
        audio.musicStep++;
      }, 210);
    }
  } catch {}
}

function stopEngineAndMusic() {
  try {
    if (audio.engineGain && audio.ctx) {
      audio.engineGain.gain.setTargetAtTime(0.0001, audio.ctx.currentTime, 0.08);
    }
    if (audio.musicTimer) {
      clearInterval(audio.musicTimer);
      audio.musicTimer = null;
    }
  } catch {}
}

function duckMusic(duration = 0.45) {
  if (!audio.musicDuck || !audio.ctx) return;
  try {
    const t = audio.ctx.currentTime;
    audio.musicDuck.gain.cancelScheduledValues(t);
    audio.musicDuck.gain.setTargetAtTime(0.25, t, 0.03);
    audio.musicDuck.gain.setTargetAtTime(1.0, t + duration, 0.22);
  } catch {}
}

function playSfx(type, pitchBoost = 1) {
  const ctx = ensureAudio();
  if (!ctx) return;
  try {
    const t = ctx.currentTime;
    // Slight +/-1 semitone & +/-2dB randomization to prevent machine-gun fatigue
    const randPitch = 0.94 + Math.random() * 0.12;
    const randGain = 0.8 + Math.random() * 0.4;

    if (type === 'lane') {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280 * pitchBoost * randPitch, t);
      osc.frequency.exponentialRampToValueAtTime(420 * pitchBoost * randPitch, t + 0.055);
      g.gain.setValueAtTime(0.09 * randGain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.065);
      osc.connect(g); g.connect(audio.sfxBus);
      osc.start(t); osc.stop(t + 0.07);
    } else if (type === 'energy') {
      const base = 660 * Math.min(1.65, 1 + state.combo * 0.055) * randPitch;
      [1, 1.5].forEach((mult, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(base * mult, t + idx * 0.035);
        g.gain.setValueAtTime(0.16 * randGain, t + idx * 0.035);
        g.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.035 + 0.14);
        osc.connect(g); g.connect(audio.sfxBus);
        osc.start(t + idx * 0.035); osc.stop(t + idx * 0.035 + 0.15);
      });
    } else if (type === 'nearmiss') {
      if (audio.noiseBuf) {
        const src = ctx.createBufferSource();
        src.buffer = audio.noiseBuf;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(900, t);
        filter.frequency.exponentialRampToValueAtTime(2400, t + 0.12);
        filter.Q.value = 3.0;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.14 * randGain, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
        src.connect(filter); filter.connect(g); g.connect(audio.sfxBus);
        src.start(t); src.stop(t + 0.14);
      }
    } else if (type === 'hit' || type === 'impact') {
      duckMusic(0.5);
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160 * randPitch, t);
      osc.frequency.exponentialRampToValueAtTime(42, t + 0.24);
      g.gain.setValueAtTime(0.32, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
      osc.connect(g); g.connect(audio.sfxBus);
      osc.start(t); osc.stop(t + 0.28);

      if (audio.noiseBuf) {
        const src = ctx.createBufferSource();
        src.buffer = audio.noiseBuf;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, t);
        filter.frequency.exponentialRampToValueAtTime(180, t + 0.22);
        const ng = ctx.createGain();
        ng.gain.setValueAtTime(0.28, t);
        ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
        src.connect(filter); filter.connect(ng); ng.connect(audio.sfxBus);
        src.start(t); src.stop(t + 0.25);
      }
    } else if (type === 'sector' || type === 'start' || type === 'win' || type === 'lose') {
      const notes = type === 'lose' ? [260, 196, 146] : type === 'win' ? [440, 554, 659, 880] : [392, 523, 659];
      notes.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = type === 'lose' ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(f, t + idx * 0.06);
        g.gain.setValueAtTime(0.14, t + idx * 0.06);
        g.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.06 + 0.22);
        osc.connect(g); g.connect(audio.uiBus);
        osc.start(t + idx * 0.06); osc.stop(t + idx * 0.06 + 0.24);
      });
    } else if (type === 'shield') {
      [520, 780, 1040].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f * randPitch, t + idx * 0.045);
        g.gain.setValueAtTime(0.18 * randGain, t + idx * 0.045);
        g.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.045 + 0.18);
        osc.connect(g); g.connect(audio.sfxBus);
        osc.start(t + idx * 0.045); osc.stop(t + idx * 0.045 + 0.20);
      });
    } else if (type === 'data') {
      [440, 660, 880].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f * randPitch, t + idx * 0.03);
        g.gain.setValueAtTime(0.16 * randGain, t + idx * 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.03 + 0.14);
        osc.connect(g); g.connect(audio.sfxBus);
        osc.start(t + idx * 0.03); osc.stop(t + idx * 0.03 + 0.15);
      });
    } else if (type === 'hyper') {
      [330, 660, 990, 1320].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f * randPitch, t + idx * 0.035);
        g.gain.setValueAtTime(0.15 * randGain, t + idx * 0.035);
        g.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.035 + 0.22);
        osc.connect(g); g.connect(audio.sfxBus);
        osc.start(t + idx * 0.035); osc.stop(t + idx * 0.035 + 0.24);
      });
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(780 * randPitch, t);
      g.gain.setValueAtTime(0.08, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
      osc.connect(g); g.connect(audio.uiBus);
      osc.start(t); osc.stop(t + 0.045);
    }
  } catch {}
}

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
      if (!audio.ctx) return;
      try {
        if (muted) audio.ctx.suspend();
        else if (soundOn) audio.ctx.resume();
      } catch (e) {}
    }
  });
}
initOrbitAdMob();

function freshState() {
  return {
    time: RUN_SECONDS, distance: 0, tickets: 0, score: 0,
    lane: 1, laneX: 0, envOffset: 0, speed: 14.5, spawnTimer: .4,
    hearts: 3, invuln: 0, lastImpact: null,
    sector: 'SEKTÖR 01', sectorIdx: 0,
    combo: 0, maxCombo: 0, trauma: 0, hitStop: 0,
    exhaustTimer: 0, revived: false, doubledCores: false
  };
}

function spawnParticle(x, y, z, vx, vy, vz, r, g, b, size, life, emission = 1.15) {
  const p = particles[particleCursor];
  particleCursor = (particleCursor + 1) % PARTICLE_POOL_SIZE;
  p.active = true;
  p.x = x; p.y = y; p.z = z;
  p.vx = vx; p.vy = vy; p.vz = vz;
  p.r = r; p.g = g; p.b = b;
  p.size = size; p.life = life; p.maxLife = life;
  p.emission = emission;
}

function spawnBurst(x, y, z, count, r, g, b, spread = 3.2, size = 0.085) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = (0.4 + Math.random() * 0.9) * spread;
    spawnParticle(
      x, y, z,
      Math.cos(a) * sp, (Math.random() - 0.2) * sp, Math.sin(a) * sp,
      r, g, b, size * (0.7 + Math.random() * 0.6), 0.35 + Math.random() * 0.35
    );
  }
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
    'uniform vec3 uFogColor;',
    'uniform vec3 uRimColor;',
    'uniform float uEmission;',
    'uniform float uTime;',
    'uniform sampler2D uSampler;',
    'uniform float uUseTexture;',
    'uniform float uAlpha;',
    'uniform float uFogExempt;',
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
    '  float diffuse = max(dot(n, l1), 0.0) * 0.82 + max(dot(n, l2), 0.0) * 0.28;',
    '  float specular = pow(max(dot(n, halfDir), 0.0), 32.0) * 0.34;',
    '  float rim = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0) * 0.42;',
    '  vec3 baseColor = vColor * uTint;',
    '  float outAlpha = uAlpha;',
    '  if (uUseTexture > 0.5) {',
    '    vec4 tex = texture2D(uSampler, vTexCoord);',
    '    if (uAlpha < 0.999) {',
    '      if (tex.a < 0.04) discard;',
    '      baseColor = tex.rgb * uTint;',
    '      outAlpha = uAlpha * tex.a;',
    '    } else {',
    '      baseColor = mix(baseColor, tex.rgb * uTint, 0.92);',
    '      outAlpha = 1.0;',
    '    }',
    '  }',
    '  vec3 base = max(baseColor, vec3(0.0));',
    '  float grain = sin(dot(vWorld, vec3(113.1, 79.7, 53.3))) * 0.010;',
    '  float panel = 1.0 - 0.045 * step(0.988, fract(vWorld.y * 1.15)) * step(0.3, abs(n.x));',
    '  vec3 lit = base * (0.38 + diffuse + grain) * panel + vec3(specular) + uRimColor * rim + base * uEmission;',
    '  float fog = smoothstep(46.0, 128.0, distance(uCamera, vWorld)) * (1.0 - uFogExempt);',
    '  gl_FragColor = vec4(mix(lit, uFogColor, fog), outAlpha);',
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
    fogColor: gl.getUniformLocation(program, 'uFogColor'),
    rimColor: gl.getUniformLocation(program, 'uRimColor'),
    emission: gl.getUniformLocation(program, 'uEmission'),
    time: gl.getUniformLocation(program, 'uTime'),
    sampler: gl.getUniformLocation(program, 'uSampler'),
    useTexture: gl.getUniformLocation(program, 'uUseTexture'),
    alpha: gl.getUniformLocation(program, 'uAlpha'),
    fogExempt: gl.getUniformLocation(program, 'uFogExempt')
  };

  const texLava = loadTexture(gl, 'textures/tex_lava.png');
  const texIce = loadTexture(gl, 'textures/tex_ice.png');
  const texNebula = loadTexture(gl, 'textures/tex_nebula.png');
  const texCrater = loadTexture(gl, 'textures/tex_crater.png');
  const texAstCinder = loadTexture(gl, 'textures/asteroid-cinder.png');
  const texAstIce = loadTexture(gl, 'textures/asteroid-ion-crystal.png');
  const texAstSilicate = loadTexture(gl, 'textures/asteroid-silicate.png');
  const texMothership = loadTexture(gl, 'textures/boss_mothership.png');
  const shipTextures = SHIPS.map((s) => loadTexture(gl, s.texturePath));

  const cube = makeCube(gl);
  const sphere = makeSphere(gl, 20, 28);
  const cylinder = makeCylinder(gl, 20);
  const ring = makeTorus(gl, 22, 10);
  const shipBody = makeShipBody(gl);
  const shipQuad = makeShipQuad(gl);
  const asteroidMesh = makeAsteroid(gl, 20, 28);
  const crystalMesh = makeCrystal(gl);
  const billboardQuad = makeBillboardQuad(gl);
  const { rails: environment, deck: envDeck } = buildEnvironment(gl);

  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);
  gl.clearColor(0.012, 0.018, 0.055, 1);
  window.addEventListener('resize', resize);
  resize();

  const SECTOR_PALETTES = [
    { fog: [0.014, 0.020, 0.062], rim: [0.22, 0.65, 1.00] }, // Crater
    { fog: [0.012, 0.036, 0.075], rim: [0.40, 0.92, 1.00] }, // Ice
    { fog: [0.055, 0.016, 0.022], rim: [1.00, 0.48, 0.22] }, // Magma
    { fog: [0.038, 0.012, 0.058], rim: [0.82, 0.35, 1.00] }  // Dreadnought
  ];

  function frame(now) {
    requestAnimationFrame(frame);
    const rawDt = lastFrame ? (now - lastFrame) / 1000 : 0;
    const dt = Math.min(Math.max(rawDt, 0), 0.05);
    lastFrame = now;
    if (mode === 'playing') update(dt);
    render(now / 1000);
  }

  function update(dt) {
    state.trauma = Math.max(0, state.trauma - dt * 1.8);
    updateParticlesAndStreaks(dt);

    if (state.hitStop > 0) {
      state.hitStop = Math.max(0, state.hitStop - dt);
      return;
    }

    state.time = Math.max(0, state.time - dt);
    const activeShip = SHIPS[selectedShip] || SHIPS[0];
    const speedFactor = 1.0 + (activeShip.speed - 85) * 0.008;
    const agilityRate = 10.0 + (activeShip.agility - 70) * 0.22;
    const comboBoost = Math.min(state.combo, 8) * 0.22;
    state.distance += state.speed * dt;
    state.speed = Math.min(24.0, (14.5 + state.distance * .012 + comboBoost) * speedFactor);
    state.envOffset = (state.envOffset + state.speed * dt) % 96;
    state.laneX += (LANES[state.lane] - state.laneX) * Math.min(1, dt * agilityRate);
    state.invuln = Math.max(0, state.invuln - dt);
    state.spawnTimer -= dt;

    // Engine hum modulation
    if (audio.engineOsc1 && audio.engineFilter && audio.ctx && soundOn) {
      const ratio = (state.speed - 14.5) / 8.0;
      audio.engineOsc1.frequency.setTargetAtTime(52 + ratio * 26, audio.ctx.currentTime, 0.08);
      audio.engineOsc2.frequency.setTargetAtTime(104 + ratio * 52, audio.ctx.currentTime, 0.08);
      audio.engineFilter.frequency.setTargetAtTime(220 + ratio * 260, audio.ctx.currentTime, 0.08);
    }

    // Twin engine plasma exhaust particles (Ship-specific palette & turbo lengthening)
    state.exhaustTimer -= dt;
    if (state.exhaustTimer <= 0) {
      state.exhaustTimer = 0.026;
      const ship = SHIPS[selectedShip] || SHIPS[0];
      const tCol = ship.thrustColor;
      const lean = (LANES[state.lane] - state.laneX) * -0.18;
      const cosR = Math.cos(lean * 2.2);
      const sinR = Math.sin(lean * 2.2);
      const spdRatio = Math.max(0, state.speed - 14.5);
      for (const side of [-1, 1]) {
        const nozX = side * 0.34;
        spawnParticle(
          state.laneX + nozX * cosR,
          0.16 + nozX * sinR,
          PLAYER_Z + 0.96,
          (Math.random() - 0.5) * 0.25 - lean * 0.45,
          (Math.random() - 0.5) * 0.18,
          4.8 + state.speed * 0.25,
          tCol[0], tCol[1], tCol[2],
          0.065 + spdRatio * 0.02,
          0.24 + spdRatio * 0.08,
          1.3
        );
      }
    }

    // Sector advancement based on distance
    let nextIdx = 0;
    let nextLabel = 'SEKTÖR 01 • KRATER KUŞAĞI';
    if (state.distance >= 480) { nextIdx = 3; nextLabel = 'SEKTÖR 04 • DREADNOUGHT ALANI'; }
    else if (state.distance >= 300) { nextIdx = 2; nextLabel = 'SEKTÖR 03 • VOLKANİK MAGMA'; }
    else if (state.distance >= 140) { nextIdx = 1; nextLabel = 'SEKTÖR 02 • BUZUL YÖRÜNGESİ'; }
    if (nextIdx !== state.sectorIdx) {
      state.sectorIdx = nextIdx;
      state.sector = nextLabel;
      showToast(nextLabel);
      playSfx('sector');
    } else {
      state.sector = nextLabel;
    }

    if (state.spawnTimer <= 0) {
      spawnPattern();
      state.spawnTimer += Math.max(.52, .90 - state.distance * .00035);
    }

    for (const item of objects) {
      item.previousZ = item.z;
      item.z += state.speed * dt;
    }
    for (let i = objects.length - 1; i >= 0; i--) {
      const item = objects[i];
      const shipInsideLane = Math.abs(state.laneX - LANES[item.lane]) < .66;
      const crossedPlayer = item.previousZ <= PLAYER_Z + .55 && item.z >= PLAYER_Z - .22;
      if (crossedPlayer && !item.checked) {
        if (shipInsideLane) {
          item.checked = true;
          if (item.type === 'energy') collectEnergy(item);
          else hitAsteroid(item);
        } else if (item.type === 'asteroid' && !item.nearMissed && Math.abs(item.lane - state.lane) === 1) {
          item.nearMissed = true;
          triggerNearMiss(item);
        }
      }
      if (item.z > 10 || item.checked) {
        if (item.type === 'energy' && !item.checked && item.z > PLAYER_Z + 0.8) {
          state.combo = 0;
          syncComboUI();
        }
        objects.splice(i, 1);
      }
    }

    updateHazardWarning();
    state.score = Math.max(state.score, Math.floor(state.distance * 12 + state.tickets * 120));
    updateHud();
    if (state.time <= 0 || state.hearts <= 0) finishRun();
  }

  function updateParticlesAndStreaks(dt) {
    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
      const p = particles[i];
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) { p.active = false; continue; }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
    }
    const spd = mode === 'playing' ? state.speed : 8.0;
    for (let i = 0; i < STREAK_COUNT; i++) {
      const s = warpStreaks[i];
      s.z += spd * s.speedMul * dt;
      if (s.z > 9) {
        s.z = -78 - Math.random() * 14;
      }
    }
  }

  function spawnPattern() {
    const blockedLane = Math.floor(random() * 3);
    const safeLanes = [0, 1, 2].filter((i) => i !== blockedLane);
    const rewardLane = safeLanes[Math.floor(random() * safeLanes.length)];
    const otherLane = safeLanes.find((i) => i !== rewardLane);

    // 3 Distinct Asteroid Classes (Silicate, Cinder Lava, Glacial Ice)
    const aRoll = random();
    const aType = aRoll < 0.45 ? 'silicate' : aRoll < 0.75 ? 'cinder' : 'ice';

    objects.push({
      type: 'asteroid',
      subType: aType,
      lane: blockedLane,
      z: -72,
      checked: false,
      nearMissed: false,
      phase: random() * 6.2,
      spinX: 0.22 + random() * 0.28,
      spinY: 0.20 + random() * 0.26,
      spinZ: 0.16 + random() * 0.22
    });

    // 3 Distinct Energy / Boost Pickups (Hyper Boost, Shield Orb, Data Core)
    const pRoll = random();
    let pType = 'hyper';
    if (state.hearts < 3 && pRoll < 0.40) {
      pType = 'shield';
    } else if (pRoll < 0.45) {
      pType = 'hyper';
    } else if (pRoll < 0.80) {
      pType = 'data';
    } else {
      pType = 'shield';
    }

    objects.push({
      type: 'energy',
      subType: pType,
      lane: rewardLane,
      z: -72,
      checked: false,
      nearMissed: false,
      phase: random() * 6.2
    });

    if (random() > 0.40) {
      const pType2 = random() > 0.5 ? 'data' : 'hyper';
      objects.push({
        type: 'energy',
        subType: pType2,
        lane: otherLane,
        z: -76,
        checked: false,
        nearMissed: false,
        phase: random() * 6.2
      });
    }
  }

  function render(time) {
    const pal = SECTOR_PALETTES[state.sectorIdx] || SECTOR_PALETTES[0];
    gl.clearColor(pal.fog[0], pal.fog[1], pal.fog[2], 1);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const shake = REDUCED_MOTION ? 0 : (state.trauma * state.trauma) * 0.34;
    const shakeX = shake ? (Math.sin(time * 53) * 0.7 + Math.cos(time * 37) * 0.3) * shake : 0;
    const shakeY = shake ? (Math.cos(time * 47) * 0.7 + Math.sin(time * 61) * 0.3) * shake : 0;
    const camX = state.laneX * 0.26 + shakeX;
    const camY = 2.9 + shakeY;

    const eye = [camX, camY, 9.0];
    const target = [state.laneX * 0.14, .55, -13.5];
    lookAt(eye, target, [0, 1, 0], _matView);
    const fov = 1.00 + Math.max(0, state.speed - 14.5) * 0.015;
    perspective(fov, viewport.aspect, .1, 150, _matPersp);
    multiply(_matPersp, _matView, _matVP);

    gl.useProgram(program);
    gl.uniformMatrix4fv(loc.vp, false, _matVP);
    gl.uniform3f(loc.camera, eye[0], eye[1], eye[2]);
    gl.uniform3f(loc.fogColor, pal.fog[0], pal.fog[1], pal.fog[2]);
    gl.uniform3f(loc.rimColor, pal.rim[0], pal.rim[1], pal.rim[2]);
    gl.uniform1f(loc.time, time);

    drawSpaceBackdrop(time);
    drawWarpStreaks();
    draw(envDeck, [0, 0, state.envOffset], [1, 1, 1], [1, 1, 1], 0.08, [0, 0, 0], null, { alpha: 0.44 });
    draw(environment, [0, 0, state.envOffset], [1, 1, 1], [1, 1, 1], 0.14);
    for (const item of objects) drawHazardOrEnergy(item, time);
    drawParticles();
    drawShip(time);
  }

  function drawSpaceBackdrop(time) {
    const drift = Math.sin(time * .08) * .7;
    const noFog = { fogExempt: 1.0 };

    // Deep space nebula veil (non-occluding additive backdrop at far z so it never swallows planets/ships)
    draw(sphere, [0, 18.0, -128], [44.0, 28.0, 12.0], [0.55, 0.28, 0.85], 0.42, [0, time * 0.004, 0.08], texNebula, { alpha: 0.38, additive: true, fogExempt: 1.0 });

    // Celestial Body 1 (Top-Left Horizon): Frosted Glacial Planet + Dual Equatorial Ice Rings
    const icePos = [-17.5 + drift, 14.5, -82];
    draw(sphere, icePos, [5.4, 5.4, 5.4], [1.0, 1.08, 1.22], 0.20, [0.12, time * 0.022, 0.04], texIce, noFog);
    draw(ring, icePos, [8.6, 1.0, 8.6], [0.55, 0.92, 1.18], 0.48, [0.38, time * 0.03, -0.22], null, { alpha: 0.65, additive: true, fogExempt: 1.0, noCull: true });
    draw(ring, icePos, [10.2, 1.0, 10.2], [0.38, 0.78, 1.08], 0.34, [0.38, time * 0.03, -0.22], null, { alpha: 0.42, additive: true, fogExempt: 1.0, noCull: true });

    // Celestial Body 2 (Top-Right Horizon): Molten Volcanic Planet + Orbiting Cratered Moon
    const lavaPos = [18.0 - drift * 0.6, 11.0, -96];
    draw(sphere, lavaPos, [4.2, 4.2, 4.2], [1.18, 0.80, 0.68], 0.28, [0.08, time * 0.018, -0.05], texLava, noFog);
    const moonX = lavaPos[0] + Math.cos(time * 0.35) * 6.8;
    const moonY = lavaPos[1] + 0.8 + Math.sin(time * 0.35) * 1.6;
    const moonZ = lavaPos[2] + Math.sin(time * 0.35) * 4.5;
    draw(sphere, [moonX, moonY, moonZ], [1.15, 1.15, 1.15], [0.92, 0.94, 1.02], 0.14, [0.05, time * 0.05, 0], texCrater, noFog);

    // Alien Mothership / Boss hovering clearly above the track horizon (no planet occlusion)
    const bossGlow = 0.55 + Math.sin(time * 3.5) * 0.22;
    const bossSwayX = Math.sin(time * 0.18) * 3.2;
    const bossSwayY = 9.2 + Math.cos(time * 0.25) * 0.65;
    draw(billboardQuad, [bossSwayX, bossSwayY, -64.0], [8.5, 8.5, 1.0], [1.0, 0.94, 0.92], bossGlow, [0, 0, Math.sin(time * 0.15) * 0.04], texMothership, { alpha: 0.96, fogExempt: 1.0, noCull: true });
  }

  function drawWarpStreaks() {
    const len = 0.65 + Math.max(0, state.speed - 14.5) * 0.14;
    for (let i = 0; i < STREAK_COUNT; i++) {
      const s = warpStreaks[i];
      draw(cube, [s.x, s.y, s.z], [0.028, 0.028, len], s.color, 0.95, [0, 0, 0], null, { alpha: 0.75, additive: true });
    }
  }

  function drawParticles() {
    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
      const p = particles[i];
      if (!p.active) continue;
      const t = p.life / p.maxLife;
      const sc = p.size * (0.35 + 0.65 * t);
      draw(cube, [p.x, p.y, p.z], [sc, sc, sc], [p.r, p.g, p.b], p.emission * t, [0, 0, 0], null, { alpha: 0.85 * t, additive: true });
    }
  }

  function drawShip(time) {
    const ship = SHIPS[selectedShip] || SHIPS[0];
    const texShip = shipTextures[selectedShip] || shipTextures[0];
    const x = state.laneX;
    const targetLaneX = LANES[state.lane];
    const lean = (targetLaneX - x) * -0.18; // banking factor
    const hover = Math.sin(time * 4.6) * 0.035;
    const engineGlow = 0.82 + Math.sin(time * 14) * 0.28;
    const speedRatio = Math.max(0, state.speed - 14.5);
    const turboFlameLen = 0.22 + speedRatio * 0.055;

    // Pitch, yaw, and banking roll angles (Sleek forward flight angle)
    const pitch = 0.24 + hover * 0.35;
    const yaw = lean * 0.55;
    const roll = lean * 1.45;
    const shipRot = [pitch, yaw, roll];

    // High-resolution textured ship deck (alpha < 1 enables proper BLEND & avoids Z-buffer clipping of thruster glow)
    draw(shipQuad, [x, 0.50 + hover, PLAYER_Z], [1.18, 1.0, 1.25], [1.0, 1.0, 1.0], 0.42, shipRot, texShip, { noCull: true, alpha: 0.995 });

    // Twin additive plasma exhaust cones aligned with pitched rear thrusters
    const tCol = ship.thrustColor;
    const cosR = Math.cos(roll);
    const sinR = Math.sin(roll);
    for (const nozX of [-0.25, 0.25]) {
      const worldNozX = x + nozX * cosR;
      const worldNozY = 0.44 + hover - nozX * sinR * 0.5;
      const worldNozZ = PLAYER_Z + 0.60;

      // Glowing nozzle orb
      draw(sphere, [worldNozX, worldNozY, worldNozZ], [0.11, 0.09, 0.13], tCol, engineGlow, [0, 0, 0], null, { alpha: 0.78, additive: true });
      // Lengthened plasma flame cone
      draw(cube, [worldNozX, worldNozY - 0.02, worldNozZ + turboFlameLen * 0.48], [0.065, 0.055, turboFlameLen], tCol, 1.25 + engineGlow * 0.3, shipRot, null, { alpha: 0.68, additive: true });
    }

    // Dual orbital plasma shield rings when invulnerable (keeps spacecraft crisp!)
    if (state.invuln > 0) {
      const pulse = 0.95 + Math.sin(time * 16) * 0.08;
      draw(ring, [x, 0.48 + hover, PLAYER_Z], [1.15 * pulse, 1.0, 1.15 * pulse], [0.28, 0.90, 1.0], 1.35, [0.18, time * 3.5, 0.12], null, { alpha: 0.65, additive: true, noCull: true });
      draw(ring, [x, 0.48 + hover, PLAYER_Z], [0.95 * pulse, 1.0, 0.95 * pulse], [0.65, 0.96, 1.0], 1.15, [-0.25, -time * 2.8, -0.18], null, { alpha: 0.45, additive: true, noCull: true });
    }
  }

  function drawHazardOrEnergy(item, time) {
    const x = LANES[item.lane];
    const bob = Math.sin(time * 3.3 + item.phase) * 0.11;

    if (item.type === 'energy') {
      const pType = item.subType || 'hyper';
      if (pType === 'shield') {
        // Shield Orb: Concentric luminous plasma sphere with inner core
        const pulse = 0.95 + Math.sin(time * 6 + item.phase) * 0.15;
        draw(sphere, [x, 0.52 + bob, item.z], [0.32 * pulse, 0.32 * pulse, 0.32 * pulse], [0.22, 0.88, 1.0], 1.25, [0, time * 2, 0]);
        draw(sphere, [x, 0.52 + bob, item.z], [0.16, 0.16, 0.16], [1.0, 1.0, 1.0], 1.4);
      } else if (pType === 'data') {
        // Data Core: Emerald green rotating prism with digital gleam
        draw(crystalMesh, [x, 0.54 + bob, item.z], [0.35, 0.55, 0.35], [0.15, 1.0, 0.55], 1.15, [time * 0.4, time * 1.8 + item.phase, time * 0.3]);
        draw(sphere, [x, 0.54 + bob, item.z], [0.13, 0.13, 0.13], [0.8, 1.0, 0.9], 0.9);
      } else {
        // Hyper Drive: Golden yellow crystal core with high energy emission
        draw(crystalMesh, [x, 0.55 + bob, item.z], [0.38, 0.52, 0.38], [1.0, 0.78, 0.18], 1.2, [time * 0.24, time * 0.8 + item.phase, time * 0.15]);
        draw(sphere, [x, 0.55 + bob, item.z], [0.14, 0.14, 0.14], [1.0, 0.95, 0.6], 1.1);
      }
      return;
    }

    // Realistic asteroid tumbling physics across 3 axes - NO ARTIFICIAL HALO RINGS!
    const rotX = time * (item.spinX || 0.32) + item.phase;
    const rotY = time * (item.spinY || 0.24);
    const rotZ = time * (item.spinZ || 0.18);
    const astRotation = [rotX, rotY, rotZ];

    const aClass = item.subType || 'silicate';
    if (aClass === 'cinder') {
      // Lav / Cinder Akkor Göktaşı (Ateşli, akkor çatlaklar + 3B magma çekirdek çıkıntısı)
      const glow = 0.28 + Math.sin(time * 4.2 + item.phase) * 0.12;
      draw(asteroidMesh, [x, 0.34, item.z], [0.74, 0.70, 0.72], [1.18, 0.85, 0.75], glow, astRotation, texAstCinder);
      draw(crystalMesh, [x, 0.34, item.z], [0.46, 0.86, 0.46], [1.0, 0.42, 0.10], 0.85 + glow, [rotX + 0.5, rotY + 0.8, rotZ]);
    } else if (aClass === 'ice') {
      // Buzul / Kristal Göktaşı (Mavi ışıltılı + 3B kristal çıkıntıları)
      const shimmer = 0.20 + Math.cos(time * 3.5 + item.phase) * 0.08;
      draw(asteroidMesh, [x, 0.34, item.z], [0.70, 0.67, 0.70], [0.95, 1.08, 1.22], shimmer, astRotation, texAstIce);
      draw(crystalMesh, [x, 0.34, item.z], [0.50, 0.96, 0.50], [0.30, 0.90, 1.0], 0.90 + shimmer, [rotX + 0.4, rotY + 1.1, rotZ - 0.3]);
    } else {
      // Standart Bazalt / Silikat Kraterli Göktaşı
      draw(asteroidMesh, [x, 0.34, item.z], [0.70, 0.66, 0.68], [1.0, 0.96, 0.92], 0.10, astRotation, texAstSilicate);
    }
  }

  function updateHazardWarning() {
    const incoming = objects
      .filter((item) => item.type === 'asteroid' && !item.checked && item.z > -32 && item.z < PLAYER_Z + .55);
    const closest = incoming.slice().sort((a, b) => b.z - a.z)[0];

    const threatDots = document.querySelectorAll('#threatLanes span');
    if (threatDots.length === 3) {
      for (let i = 0; i < 3; i++) {
        const hasThreat = incoming.some((it) => it.lane === i);
        threatDots[i].classList.toggle('hot', hasThreat);
      }
    }

    if (!closest) {
      ui.hazard.classList.add('hidden');
      return;
    }
    const laneName = ['SOL', 'ORTA', 'SAĞ'][closest.lane];
    const warning = 'UYARI • ASTEROİT ' + laneName + ' ROTASINDA';
    if (ui.hazard.textContent !== warning) ui.hazard.textContent = warning;
    ui.hazard.classList.remove('hidden');
  }

  function draw(mesh, position, scale, tint, emission = 0, rotation = [0, 0, 0], texture = null, opts = null) {
    modelMatrix(position, rotation, scale, _matModel);
    normalMatrix(_matModel, _matNormal);

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

    const alpha = opts && opts.alpha != null ? opts.alpha : 1.0;
    const additive = !!(opts && opts.additive);
    const fogExempt = opts && opts.fogExempt != null ? opts.fogExempt : 0.0;
    const noCull = !!(opts && opts.noCull);

    const needsBlend = alpha < 0.999 || additive;
    if (needsBlend) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, additive ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA);
      gl.depthMask(false);
    }
    if (noCull) gl.disable(gl.CULL_FACE);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.index);
    gl.uniformMatrix4fv(loc.model, false, _matModel);
    gl.uniformMatrix4fv(loc.normalMatrix, false, _matNormal);
    gl.uniform3f(loc.tint, tint[0], tint[1], tint[2]);
    gl.uniform1f(loc.emission, emission);
    gl.uniform1f(loc.alpha, alpha);
    gl.uniform1f(loc.fogExempt, fogExempt);
    gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);

    if (noCull) gl.enable(gl.CULL_FACE);
    if (needsBlend) {
      gl.depthMask(true);
      gl.disable(gl.BLEND);
    }
  }

  function syncComboUI() {
    if (!ui.combo) return;
    if (state.combo >= 2) {
      const mult = Math.min(4, 1 + Math.floor(state.combo / 3));
      ui.combo.innerHTML = 'COMBO <b>x' + mult + '</b> (' + state.combo + ')';
      ui.combo.classList.remove('hidden');
      ui.combo.classList.remove('pop');
      void ui.combo.offsetWidth;
      ui.combo.classList.add('pop');
      ui.game.classList.toggle('overdrive', state.combo >= 5);
    } else {
      ui.combo.classList.add('hidden');
      ui.game.classList.remove('overdrive');
    }
  }

  function collectEnergy(item) {
    const pType = item.subType || 'hyper';
    state.combo++;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    const mult = Math.min(4, 1 + Math.floor(state.combo / 3));

    if (pType === 'shield') {
      state.tickets++;
      if (state.hearts < 3) {
        state.hearts++;
        showToast('KALKAN MATRİSİ YENİLENDİ! 🛡️ (+1 KALKAN)');
      } else {
        const bonus = 250 * mult;
        state.score += bonus;
        showToast('AŞIRI YÜKLÜ KALKAN! 🛡️ (+' + bonus + ')');
      }
      spawnBurst(LANES[item.lane], 0.5, PLAYER_Z, 16, 0.22, 0.88, 1.0, 3.6, 0.08);
      playSfx('shield');
    } else if (pType === 'data') {
      state.tickets += 2;
      const pts = 200 * mult;
      state.score += pts;
      showToast('VERİ ÇEKİRDEĞİ DEŞİFRE EDİLDİ! ✦ (+' + pts + ')');
      spawnBurst(LANES[item.lane], 0.5, PLAYER_Z, 18, 0.15, 1.0, 0.55, 3.8, 0.08);
      playSfx('data');
    } else {
      // Hyper Boost
      state.tickets++;
      const pts = 150 * mult;
      state.score += pts;
      state.speed = Math.min(26.0, state.speed + 1.2);
      showToast('HİPER BOOST! ⚡ (+' + pts + ')');
      spawnBurst(LANES[item.lane], 0.5, PLAYER_Z, 20, 1.0, 0.78, 0.18, 4.2, 0.09);
      playSfx('hyper');
    }

    state.trauma = Math.min(1, state.trauma + 0.08);
    syncComboUI();
    updateHud();
    if (audioSettings.haptics && navigator.vibrate) navigator.vibrate(12);
  }

  function triggerNearMiss(item) {
    state.score += 50;
    state.trauma = Math.min(1, state.trauma + 0.14);
    spawnBurst((LANES[item.lane] + state.laneX) * 0.5, 0.35, PLAYER_Z, 8, 0.45, 0.90, 1.0, 2.5, 0.055);
    showToast('KIL PAYI! +50');
    playSfx('nearmiss');
    if (audioSettings.haptics && navigator.vibrate) navigator.vibrate(8);
  }

  function hitAsteroid(item) {
    if (state.invuln > 0) return;
    state.hearts--;
    state.combo = 0;
    syncComboUI();
    const shipSpec = SHIPS[selectedShip] || SHIPS[0];
    state.invuln = 1.25 + (shipSpec.shield - 70) * 0.018;
    state.trauma = 0.85;
    state.hitStop = REDUCED_MOTION ? 0 : 0.065;
    const aType = item.subType || 'silicate';
    const aName = aType === 'cinder' ? 'LAV ASTEROİTİ' : aType === 'ice' ? 'BUZUL ASTEROİTİ' : 'SİLİKAT ASTEROİT';
    state.lastImpact = { name: aName, lane: ['SOL', 'ORTA', 'SAĞ'][item.lane] };

    // Burst colors matching asteroid class
    const bCol = aType === 'cinder' ? [1.0, 0.40, 0.12] : aType === 'ice' ? [0.45, 0.85, 1.0] : [0.85, 0.75, 0.70];
    spawnBurst(LANES[item.lane], 0.4, PLAYER_Z, 26, bCol[0], bCol[1], bCol[2], 5.2, 0.11);

    ui.game.classList.remove('impact');
    void ui.game.offsetWidth;
    ui.game.classList.add('impact');
    setTimeout(() => ui.game.classList.remove('impact'), 260);
    ui.impact.textContent = 'SON ÇARPIŞMA: ' + aName + ' • ' + state.lastImpact.lane + ' ROTA';
    ui.impact.classList.add('collision');
    showToast(state.hearts ? aName + ' ÇARPTI • ' + state.hearts + ' KALKAN KALDI' : aName + ' ÇARPTI • KALKANLAR TÜKENDİ');
    playSfx('impact');
    if (audioSettings.haptics && navigator.vibrate) navigator.vibrate([40, 30, 60]);
    updateHud();
  }

  function updateHud() {
    ui.score.textContent = String(state.score).padStart(6, '0');
    ui.tickets.textContent = state.tickets;
    ui.timer.innerHTML = String(Math.ceil(state.time)) + '<span>s</span>';
    const warpPct = Math.round(state.speed * 4.2);
    ui.speed.textContent = 'WARP ' + warpPct + '%';
    ui.lives.setAttribute('aria-label', state.hearts + ' kalkan kaldı');
    [...ui.lives.children].forEach((heart, i) => {
      heart.classList.toggle('on', i < state.hearts);
      heart.classList.toggle('lost', i >= state.hearts);
    });
    const dateLabel = $('#dateLabel');
    if (dateLabel && dateLabel.textContent !== state.sector) {
      dateLabel.textContent = state.sector;
    }
    // Sci-Fi Cockpit Telemetry & Sector Accent (modern-web-guidance CSS variables)
    const sectorAccents = ['#72ddff', '#66f2ff', '#ff7847', '#c084fc'];
    const accent = sectorAccents[state.sectorIdx] || '#72ddff';
    if (ui.game) {
      const rollDeg = ((LANES[state.lane] - state.laneX) * -9.5).toFixed(2) + 'deg';
      ui.game.style.setProperty('--ship-roll', rollDeg);
      ui.game.style.setProperty('--sector-accent', accent);
    }
    const progressEl = $('#sectorProgressFill');
    if (progressEl) {
      const pct = Math.min(100, Math.max(4, Math.round(((RUN_SECONDS - state.time) / RUN_SECONDS) * 100)));
      progressEl.style.width = pct + '%';
    }
    const shieldPctEl = $('#shieldPct');
    if (shieldPctEl) {
      shieldPctEl.textContent = Math.round((state.hearts / 3) * 100) + '%';
    }
  }

  function startRun() {
    state = freshState();
    const today = new Date();
    random = seededRandom(today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate());
    objects = [];
    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) particles[i].active = false;
    mode = 'playing';
    ui.start.classList.add('hidden');
    ui.pause.classList.add('hidden');
    ui.result.classList.add('hidden');
    ui.hud.classList.add('visible');
    ui.bottom.classList.add('visible');
    ui.station.classList.add('dim');
    ui.hazard.classList.add('hidden');
    ui.game.classList.remove('overdrive', 'impact');
    syncComboUI();
    ui.impact.textContent = 'TEMİZ UÇUŞ • ASTEROİT TEMASI YOK';
    ui.impact.classList.remove('collision');
    updateHud();
    startEngineAndMusic();
    playSfx('start');
  }

  function pauseRun() {
    if (mode !== 'playing') return;
    mode = 'paused';
    ui.pause.classList.remove('hidden');
    stopEngineAndMusic();
  }

  function resumeRun() {
    if (mode !== 'paused') return;
    mode = 'playing';
    ui.pause.classList.add('hidden');
    lastFrame = 0;
    startEngineAndMusic();
  }

  function finishRun() {
    if (mode !== 'playing') return;
    mode = 'result';
    stopEngineAndMusic();
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
    if (ui.combo) ui.combo.classList.add('hidden');
    ui.game.classList.remove('overdrive');
    playSfx(state.hearts ? 'win' : 'lose');
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
        startEngineAndMusic();
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

  function updateActiveShipUI() {
    const ship = SHIPS[selectedShip] || SHIPS[0];
    if (ui.activeShipImg) ui.activeShipImg.src = ship.texturePath;
    if (ui.activeShipName) ui.activeShipName.textContent = ship.name;
  }

  function initSettingsModal() {
    function openModal() {
      if (mode === 'playing') pauseRun();
      if (ui.setMasterToggle) ui.setMasterToggle.checked = audioSettings.sound;
      if (ui.setMasterRange) ui.setMasterRange.value = audioSettings.master;
      if (ui.setMasterVal) ui.setMasterVal.textContent = audioSettings.master + '%';
      if (ui.setMusicRange) ui.setMusicRange.value = audioSettings.music;
      if (ui.setMusicVal) ui.setMusicVal.textContent = audioSettings.music + '%';
      if (ui.setSfxRange) ui.setSfxRange.value = audioSettings.sfx;
      if (ui.setSfxVal) ui.setSfxVal.textContent = audioSettings.sfx + '%';
      if (ui.setAmbienceRange) ui.setAmbienceRange.value = audioSettings.ambience;
      if (ui.setAmbienceVal) ui.setAmbienceVal.textContent = audioSettings.ambience + '%';
      if (ui.setHapticsToggle) ui.setHapticsToggle.checked = audioSettings.haptics;
      if (ui.settingsModal) ui.settingsModal.classList.remove('hidden');
      playSfx('click');
    }

    function closeModal() {
      if (ui.settingsModal) ui.settingsModal.classList.add('hidden');
      playSfx('click');
    }

    if (ui.settingsButton) ui.settingsButton.addEventListener('click', openModal);
    if (ui.pauseSettingsButton) ui.pauseSettingsButton.addEventListener('click', openModal);
    const startSetBtn = $('#openSettingsButton');
    if (startSetBtn) startSetBtn.addEventListener('click', openModal);
    if (ui.closeSettings) ui.closeSettings.addEventListener('click', closeModal);
    if (ui.settingsBackdrop) ui.settingsBackdrop.addEventListener('click', closeModal);
    if (ui.saveSettings) ui.saveSettings.addEventListener('click', closeModal);

    if (ui.setMasterToggle) {
      ui.setMasterToggle.addEventListener('change', (e) => {
        audioSettings.sound = e.target.checked;
        soundOn = audioSettings.sound;
        safeSet('elockman-orbit-sound', soundOn ? 'on' : 'off');
        applyAudioSettings();
        if (soundOn) {
          ensureAudio();
          playSfx('click');
        }
      });
    }

    if (ui.setMasterRange) {
      ui.setMasterRange.addEventListener('input', (e) => {
        audioSettings.master = Number(e.target.value);
        if (ui.setMasterVal) ui.setMasterVal.textContent = e.target.value + '%';
        safeSet('elockman-orbit-vol-master', String(audioSettings.master));
        applyAudioSettings();
      });
    }

    if (ui.setMusicRange) {
      ui.setMusicRange.addEventListener('input', (e) => {
        audioSettings.music = Number(e.target.value);
        if (ui.setMusicVal) ui.setMusicVal.textContent = e.target.value + '%';
        safeSet('elockman-orbit-vol-music', String(audioSettings.music));
        applyAudioSettings();
      });
    }

    if (ui.setSfxRange) {
      ui.setSfxRange.addEventListener('input', (e) => {
        audioSettings.sfx = Number(e.target.value);
        if (ui.setSfxVal) ui.setSfxVal.textContent = e.target.value + '%';
        safeSet('elockman-orbit-vol-sfx', String(audioSettings.sfx));
        applyAudioSettings();
      });
    }

    if (ui.setAmbienceRange) {
      ui.setAmbienceRange.addEventListener('input', (e) => {
        audioSettings.ambience = Number(e.target.value);
        if (ui.setAmbienceVal) ui.setAmbienceVal.textContent = e.target.value + '%';
        safeSet('elockman-orbit-vol-ambience', String(audioSettings.ambience));
        applyAudioSettings();
      });
    }

    if (ui.setHapticsToggle) {
      ui.setHapticsToggle.addEventListener('change', (e) => {
        audioSettings.haptics = e.target.checked;
        safeSet('elockman-orbit-haptics', audioSettings.haptics ? 'on' : 'off');
        if (audioSettings.haptics && navigator.vibrate) navigator.vibrate(20);
      });
    }
  }

  function initHangarModal() {
    function renderHangarCards() {
      if (!ui.hangarGrid) return;
      ui.hangarGrid.innerHTML = SHIPS.map((ship) => {
        const isActive = ship.id === selectedShip;
        return `
          <div class="hangar-card-item ${isActive ? 'active' : ''}" data-ship-id="${ship.id}">
            <div class="ship-card-head">
              <img src="${ship.texturePath}" alt="${ship.name}" class="ship-card-thumb">
              <div class="ship-card-title">
                <span class="ship-card-code">${ship.code}</span>
                <strong class="ship-card-name">${ship.name}</strong>
                <span class="ship-card-role">${ship.role}</span>
              </div>
            </div>
            <div class="ship-card-desc">${ship.desc}</div>
            <div class="ship-stats">
              <div class="ship-stat-row">
                <span>HIZ</span>
                <div class="ship-stat-bar-bg"><div class="ship-stat-bar-fill" style="width:${ship.speed}%"></div></div>
                <span>${ship.speed}%</span>
              </div>
              <div class="ship-stat-row">
                <span>MANEVRA</span>
                <div class="ship-stat-bar-bg"><div class="ship-stat-bar-fill" style="width:${ship.agility}%;background:${ship.accentHex}"></div></div>
                <span>${ship.agility}%</span>
              </div>
              <div class="ship-stat-row">
                <span>KALKAN</span>
                <div class="ship-stat-bar-bg"><div class="ship-stat-bar-fill" style="width:${ship.shield}%;background:#ffc15d"></div></div>
                <span>${ship.shield}%</span>
              </div>
            </div>
            <button class="ship-select-btn" type="button" data-select-ship="${ship.id}">
              ${isActive ? 'SEÇİLDİ ✓' : 'BU GEMİYİ SEÇ ↗'}
            </button>
          </div>
        `;
      }).join('');

      ui.hangarGrid.querySelectorAll('[data-select-ship]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const sid = parseInt(btn.getAttribute('data-select-ship'), 10);
          selectedShip = sid;
          safeSet('elockman-orbit-ship', String(selectedShip));
          updateActiveShipUI();
          renderHangarCards();
          playSfx('click');
          showToast(SHIPS[selectedShip].name + ' HAZIRLANDI!');
        });
      });
    }

    function openHangar() {
      renderHangarCards();
      if (ui.hangarModal) ui.hangarModal.classList.remove('hidden');
      playSfx('click');
    }

    function closeHangar() {
      if (ui.hangarModal) ui.hangarModal.classList.add('hidden');
      playSfx('click');
    }

    if (ui.startHangarButton) ui.startHangarButton.addEventListener('click', openHangar);
    if (ui.closeHangar) ui.closeHangar.addEventListener('click', closeHangar);
    if (ui.hangarBackdrop) ui.hangarBackdrop.addEventListener('click', closeHangar);
    if (ui.confirmShip) ui.confirmShip.addEventListener('click', closeHangar);

    updateActiveShipUI();
  }

  initSettingsModal();
  initHangarModal();
  applyAudioSettings();

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
    stopEngineAndMusic();
    ui.result.classList.add('hidden');
    ui.start.classList.remove('hidden');
    ui.hud.classList.remove('visible');
    ui.bottom.classList.remove('visible');
    ui.station.classList.remove('dim');
    ui.hazard.classList.add('hidden');
    if (ui.combo) ui.combo.classList.add('hidden');
    ui.game.classList.remove('overdrive', 'impact');
  }
  requestAnimationFrame(function initialFrame(now) { lastFrame = now; requestAnimationFrame(frame); });
}

function isPowerOf2(value) {
  return (value & (value - 1)) === 0;
}

function loadTexture(context, url) {
  const texture = context.createTexture();
  context.bindTexture(context.TEXTURE_2D, texture);
  context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, 1, 1, 0, context.RGBA, context.UNSIGNED_BYTE, new Uint8Array([15, 24, 48, 255]));

  const image = new Image();
  image.onload = () => {
    context.bindTexture(context.TEXTURE_2D, texture);
    context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, image);
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.REPEAT);
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.REPEAT);
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR_MIPMAP_LINEAR);
      context.generateMipmap(context.TEXTURE_2D);
    } else {
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_S, context.CLAMP_TO_EDGE);
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_WRAP_T, context.CLAMP_TO_EDGE);
      context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR);
    }
    context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
  };
  image.src = url;
  return texture;
}

function buildEnvironment(context) {
  const deckBuilder = new MeshBuilder();
  const railsBuilder = new MeshBuilder();
  const segmentLength = 8;
  const count = 27;
  const routeBounds = [-2.22, -.74, .74, 2.22];
  for (let s = 0; s < count; s++) {
    const center = 8 - s * segmentLength;
    const pattern = s % 12;
    // Translucent holographic orbital deck
    deckBuilder.box(0, -.70, center, 8.2, .05, 7.6, pattern % 3 === 0 ? [.04, .09, .22] : [.025, .055, .16]);

    // Glowing side rails & holographic lane guideways
    railsBuilder.box(-4.12, -.62, center, .10, .11, 7.6, [.14, .32, .62]);
    railsBuilder.box(4.12, -.62, center, .10, .11, 7.6, [.14, .32, .62]);

    for (let lane = 0; lane < routeBounds.length; lane++) {
      const color = lane === 1 || lane === 2 ? [.22, .74, .98] : lane === 0 ? [.54, .35, .95] : [.98, .58, .24];
      railsBuilder.box(routeBounds[lane], -.635, center, .042, .026, 7.4, color);
    }
    for (let t = 0; t < 3; t++) {
      const markerZ = center - 2.5 + t * 2.5;
      railsBuilder.box(0, -.645, markerZ, 7.8, .018, .07, pattern % 4 === 0 ? [.24, .42, .72] : [.10, .20, .42]);
      for (const laneX of LANES) railsBuilder.box(laneX, -.625, markerZ, .64, .022, .07, [.16, .52, .85]);
    }

    if (pattern % 3 === 0) {
      const portal = pattern === 0 ? [.68, .36, 1.0] : [.28, .72, .98];
      railsBuilder.box(-4.1, .38, center, .09, 2.0, .10, portal);
      railsBuilder.box(4.1, .38, center, .09, 2.0, .10, portal);
      railsBuilder.box(0, 1.38, center, 8.2, .07, .10, portal);
      railsBuilder.box(-3.85, 1.18, center, .30, .035, .44, [.98, .66, .28]);
      railsBuilder.box(3.85, 1.18, center, .30, .035, .44, [.98, .66, .28]);
    }

    for (let n = 0; n < 14; n++) {
      const seed = (s * 97 + n * 53 + 31) % 997;
      let starX = (seed / 997) * 29 - 14.5;
      if (Math.abs(starX) < 5.1) starX += starX < 0 ? -5.4 : 5.4;
      const starY = -1.4 + ((s * 37 + n * 71) % 142) / 10;
      const starZ = center - 3.4 + ((n * 17) % 68) / 10;
      const size = .018 + (n % 4) * .009;
      const color = n % 7 === 0 ? [1, .70, .39] : n % 3 === 0 ? [.43, .75, 1] : [.72, .82, 1];
      railsBuilder.box(starX, starY, starZ, size, size, size, color);
    }
  }
  return { deck: deckBuilder.upload(context), rails: railsBuilder.upload(context) };
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

function makeShipQuad(context) {
  const positions = [
    -1.0, 0,  1.0,
     1.0, 0,  1.0,
     1.0, 0, -1.0,
    -1.0, 0, -1.0
  ];
  const normals = [
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0
  ];
  const colors = [
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
  const indices = [
    0, 1, 2,  0, 2, 3,
    0, 2, 1,  0, 3, 2
  ];
  return uploadMesh(context, positions, normals, colors, indices, uvs);
}

function makeAsteroid(context, rings, segments) {
  const positions = [], normals = [], colors = [], uvs = [], indices = [];
  for (let y = 0; y <= rings; y++) {
    const v = y / rings;
    const theta = v * Math.PI;
    for (let x = 0; x <= segments; x++) {
      const u = x / segments;
      const phi = u * Math.PI * 2;
      const rawX = -Math.cos(phi) * Math.sin(theta);
      const rawY = Math.cos(theta);
      const rawZ = Math.sin(phi) * Math.sin(theta);
      // Seamless 3D positional displacement (zero UV seam gap at phi=0 / phi=2*PI)
      const n3 = Math.sin(rawX * 4.2 + rawY * 3.7) * Math.cos(rawZ * 4.5 - rawX * 2.8)
               + 0.50 * Math.sin(rawZ * 7.1 - rawY * 6.3)
               + 0.25 * Math.cos(rawX * 10.3 + rawZ * 9.7);
      const rock = 0.84 + 0.14 * n3;
      const px = rawX * rock, py = rawY * rock, pz = rawZ * rock;
      positions.push(px, py, pz);
      const normal = normalize([
        rawX + 0.16 * Math.cos(rawX * 4.2 + rawY * 3.7),
        rawY - 0.14 * Math.cos(rawZ * 7.1 - rawY * 6.3),
        rawZ + 0.16 * Math.sin(rawZ * 4.5 - rawX * 2.8)
      ]);
      normals.push(normal[0], normal[1], normal[2]);
      colors.push(1, 1, 1);
      uvs.push(u, v);
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
      const v = j / minorSegments, theta = v * Math.PI * 2;
      const ring = 0.86 + 0.16 * Math.cos(theta);
      const x = Math.cos(phi) * ring;
      const y = 0.045 * Math.sin(theta);
      const z = Math.sin(phi) * ring;
      const nl = normalize([Math.cos(phi) * Math.cos(theta) * 0.25, Math.sin(theta), Math.sin(phi) * Math.cos(theta) * 0.25]);
      p.push(x, y, z); n.push(nl[0], nl[1], nl[2]); c.push(1, 1, 1);
      uvs.push(u, v);
    }
  }
  for (let i = 0; i < majorSegments; i++) for (let j = 0; j < minorSegments; j++) {
    const a = i * (minorSegments + 1) + j, b = a + minorSegments + 1;
    ix.push(a, a + 1, b, b, a + 1, b + 1);
  }
  return uploadMesh(context, p, n, c, ix, uvs);
}

function makeBillboardQuad(context) {
  const p = [-1, -1, 0,  1, -1, 0,  1, 1, 0,  -1, 1, 0];
  const n = [0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1];
  const c = [1, 1, 1,  1, 1, 1,  1, 1, 1,  1, 1, 1];
  const uvs = [0, 1,  1, 1,  1, 0,  0, 0];
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
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  viewport.width = window.innerWidth; viewport.height = window.innerHeight;
  viewport.aspect = viewport.width / Math.max(1, viewport.height);
  canvas.width = Math.round(viewport.width * dpr); canvas.height = Math.round(viewport.height * dpr);
  if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
}

function moveLane(direction) {
  if (mode !== 'playing') return;
  const prev = state.lane;
  state.lane = Math.max(0, Math.min(2, state.lane + direction));
  if (state.lane !== prev) playSfx('lane', 0.9 + state.lane * 0.12);
}

function toggleSound() {
  audioSettings.sound = !audioSettings.sound;
  soundOn = audioSettings.sound;
  safeSet('elockman-orbit-sound', soundOn ? 'on' : 'off');
  if (ui.setMasterToggle) ui.setMasterToggle.checked = soundOn;
  applyAudioSettings();
  if (!soundOn) {
    stopEngineAndMusic();
  } else {
    ensureAudio();
    if (mode === 'playing') startEngineAndMusic();
    playSfx('click');
  }
}

function updateBestOnHome() {
  ui.best.textContent = String(Number(safeGet(BEST_KEY, '0') || 0)).padStart(6, '0');
}

function createDateLabel() {
  const day = new Date(), dayNum = String(day.getDate()).padStart(2, '0');
  const month = ['OCAK','ŞUB','MAR','NİS','MAY','HAZ','TEM','AĞU','EYL','EKİ','KAS','ARA'][day.getMonth()];
  $('#dateLabel').textContent = 'SEKTÖR 01 • ' + dayNum + ' ' + month;
}

function perspective(fov, aspect, near, far, out) {
  const f = 1 / Math.tan(fov / 2), nf = 1 / (near - far);
  out[0]=f/aspect; out[1]=0; out[2]=0; out[3]=0;
  out[4]=0; out[5]=f; out[6]=0; out[7]=0;
  out[8]=0; out[9]=0; out[10]=(far+near)*nf; out[11]=-1;
  out[12]=0; out[13]=0; out[14]=2*far*near*nf; out[15]=0;
  return out;
}

function lookAt(eye, center, up, out) {
  const z = normalize([eye[0]-center[0], eye[1]-center[1], eye[2]-center[2]]);
  const x = normalize(cross(up, z)), y = cross(z, x);
  out[0]=x[0]; out[1]=y[0]; out[2]=z[0]; out[3]=0;
  out[4]=x[1]; out[5]=y[1]; out[6]=z[1]; out[7]=0;
  out[8]=x[2]; out[9]=y[2]; out[10]=z[2]; out[11]=0;
  out[12]=-dot(x,eye); out[13]=-dot(y,eye); out[14]=-dot(z,eye); out[15]=1;
  return out;
}

function setIdentity(m) {
  m.fill(0); m[0]=1; m[5]=1; m[10]=1; m[15]=1;
}

function modelMatrix(position, rotation, scale, out) {
  const [x, y, z] = position, [rx, ry, rz] = rotation, [sx, sy, sz] = scale;
  setIdentity(_matT); _matT[12]=x; _matT[13]=y; _matT[14]=z;
  setIdentity(_matRx); _matRx[5]=Math.cos(rx); _matRx[6]=Math.sin(rx); _matRx[9]=-Math.sin(rx); _matRx[10]=Math.cos(rx);
  setIdentity(_matRy); _matRy[0]=Math.cos(ry); _matRy[2]=-Math.sin(ry); _matRy[8]=Math.sin(ry); _matRy[10]=Math.cos(ry);
  setIdentity(_matRz); _matRz[0]=Math.cos(rz); _matRz[1]=Math.sin(rz); _matRz[4]=-Math.sin(rz); _matRz[5]=Math.cos(rz);
  setIdentity(_matS); _matS[0]=sx; _matS[5]=sy; _matS[10]=sz;
  multiply(_matT, _matRz, _matTmpA);
  multiply(_matTmpA, _matRy, _matTmpB);
  multiply(_matTmpB, _matRx, _matTmpA);
  multiply(_matTmpA, _matS, out);
  return out;
}

function normalMatrix(m, out) {
  const x = Math.hypot(m[0], m[1], m[2]) || 1, y = Math.hypot(m[4], m[5], m[6]) || 1, z = Math.hypot(m[8], m[9], m[10]) || 1;
  out.set(m);
  out[0]/=x; out[1]/=x; out[2]/=x; out[4]/=y; out[5]/=y; out[6]/=y; out[8]/=z; out[9]/=z; out[10]/=z;
  out[12]=0; out[13]=0; out[14]=0; out[15]=1;
  return out;
}

function multiply(a, b, out) {
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    out[c*4+r] = a[r]*b[c*4] + a[4+r]*b[c*4+1] + a[8+r]*b[c*4+2] + a[12+r]*b[c*4+3];
  }
  return out;
}

function normalize(a) { const m = Math.hypot(a[0],a[1],a[2]) || 1; return [a[0]/m,a[1]/m,a[2]/m]; }
function cross(a,b) { return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; }
function dot(a,b) { return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; }

function applyNativePortalGuard() {
  try {
    const isNative = !!(typeof window !== 'undefined' && window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
    if (!isNative) return;
    const brandLink = document.getElementById('brandPortalLink');
    const brandBadge = document.getElementById('brandNativeBadge');
    const fallbackLink = document.getElementById('fallbackPortalLink');
    if (brandLink) brandLink.classList.add('hidden');
    if (brandBadge) brandBadge.classList.remove('hidden');
    if (fallbackLink) fallbackLink.classList.add('hidden');
    document.querySelectorAll('a[href="https://elockmangames.com"]').forEach((el) => el.classList.add('hidden'));
  } catch (e) {}
}
applyNativePortalGuard();

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
