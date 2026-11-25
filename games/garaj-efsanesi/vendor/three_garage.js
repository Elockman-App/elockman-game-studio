/**
 * Garaj Efsanesi — Interactive 3D WebGL Showroom Engine (Three.js r187)
 * Supports 360-degree touch/mouse orbit, NFS body-kit customization & camera focusing.
 */
(function (global) {
  'use strict';

  const CAR_DIMS = {
    sahin:        { len: 4.15, wid: 1.72, hoodH: 0.56, roofH: 1.16, roofFront: 0.45, roofRear: -0.95, noseSlope: 0.14, boxy: true },
    e30:          { len: 4.18, wid: 1.74, hoodH: 0.54, roofH: 1.12, roofFront: 0.42, roofRear: -0.92, noseSlope: 0.10, boxy: true },
    bozkir200:    { len: 4.28, wid: 1.80, hoodH: 0.58, roofH: 1.18, roofFront: 0.38, roofRear: -0.90, noseSlope: 0.20, boxy: false },
    ada_roadster: { len: 4.05, wid: 1.78, hoodH: 0.48, roofH: 0.94, roofFront: 0.25, roofRear: -0.55, noseSlope: 0.24, openTop: true },
    jdm:          { len: 4.35, wid: 1.84, hoodH: 0.50, roofH: 1.04, roofFront: 0.35, roofRear: -1.05, noseSlope: 0.26, boxy: false },
    e36_sprint:   { len: 4.24, wid: 1.76, hoodH: 0.52, roofH: 1.09, roofFront: 0.40, roofRear: -0.95, noseSlope: 0.18, boxy: false },
    samuray_r26:  { len: 4.38, wid: 1.84, hoodH: 0.54, roofH: 1.10, roofFront: 0.38, roofRear: -0.98, noseSlope: 0.16, boxy: false },
    v8:           { len: 4.52, wid: 1.88, hoodH: 0.58, roofH: 1.08, roofFront: 0.45, roofRear: -1.08, noseSlope: 0.12, boxy: true },
    sehir_ustasi: { len: 4.30, wid: 1.86, hoodH: 0.50, roofH: 1.04, roofFront: 0.32, roofRear: -1.10, noseSlope: 0.25, boxy: false },
    super:        { len: 4.46, wid: 1.94, hoodH: 0.42, roofH: 0.96, roofFront: -0.10, roofRear: -0.95, noseSlope: 0.30, midEngine: true }
  };

  const CAM_PRESETS = {
    default:     { az: 0.78, el: 0.22, dist: 5.5, tx: -0.45, ty: 0.55, tz: 0.0 },
    frontBumper: { az: 0.42, el: 0.16, dist: 4.3, tx: 0.0, ty: 0.38, tz: 1.1 },
    hood:        { az: 0.65, el: 0.34, dist: 4.3, tx: 0.0, ty: 0.55, tz: 0.8 },
    bodyKit:     { az: 1.48, el: 0.16, dist: 4.9, tx: 0.0, ty: 0.45, tz: 0.0 },
    rims:        { az: 1.38, el: 0.12, dist: 3.9, tx: 0.0, ty: 0.32, tz: 0.75 },
    spoiler:     { az: 2.38, el: 0.26, dist: 4.5, tx: 0.0, ty: 0.68, tz: -1.1 },
    exhaustNeon: { az: 2.75, el: 0.14, dist: 4.2, tx: 0.0, ty: 0.30, tz: -1.2 },
    paintFinish: { az: 0.92, el: 0.24, dist: 5.1, tx: -0.35, ty: 0.55, tz: 0.0 }
  };

  const Garaj3D = {
    isReady: false,
    canvas: null,
    renderer: null,
    scene: null,
    camera: null,
    carRoot: null,
    chassisGroup: null,
    wheelGroups: [],
    flameMeshes: [],
    underglowMesh: null,
    underglowLight: null,
    az: CAM_PRESETS.default.az,
    el: CAM_PRESETS.default.el,
    dist: CAM_PRESETS.default.dist,
    targetAz: CAM_PRESETS.default.az,
    targetEl: CAM_PRESETS.default.el,
    targetDist: CAM_PRESETS.default.dist,
    lookAt: { x: CAM_PRESETS.default.tx, y: CAM_PRESETS.default.ty, z: CAM_PRESETS.default.tz },
    targetLookAt: { x: CAM_PRESETS.default.tx, y: CAM_PRESETS.default.ty, z: CAM_PRESETS.default.tz },
    isDragging: false,
    lastPtrX: 0,
    lastPtrY: 0,
    revving: false,
    lastSig: '',
    animId: 0,
    lastTs: 0,

    init(canvasEl) {
      if (!canvasEl || !global.THREE) return false;
      if (this.isReady && this.canvas === canvasEl) return true;
      const THREE = global.THREE;
      try {
        this.canvas = canvasEl;
        this.renderer = new THREE.WebGLRenderer({
          canvas: canvasEl,
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(global.devicePixelRatio || 1, 1.5));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.18;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x060912);
        this.scene.fog = new THREE.FogExp2(0x060912, 0.036);

        this.camera = new THREE.PerspectiveCamera(40, 16 / 9, 0.1, 60);

        this.buildShowroomEnvironment();
        this.carRoot = new THREE.Group();
        this.scene.add(this.carRoot);

        this.bindOrbitControls(canvasEl);
        this.resize();
        this.isReady = true;
        this.lastTs = performance.now();
        this.startLoop();

        global.addEventListener('resize', () => this.resize());
        return true;
      } catch (e) {
        console.warn('Garaj3D WebGL init fallback:', e.message);
        this.isReady = false;
        return false;
      }
    },

    buildShowroomEnvironment() {
      const THREE = global.THREE;
      const scene = this.scene;

      // Ambient & Studio Lights
      scene.add(new THREE.HemisphereLight(0xa5d8ff, 0x161b28, 1.15));

      const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
      keyLight.position.set(5, 8.5, 6);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.near = 1;
      keyLight.shadow.camera.far = 25;
      keyLight.shadow.camera.left = -5;
      keyLight.shadow.camera.right = 5;
      keyLight.shadow.camera.top = 5;
      keyLight.shadow.camera.bottom = -5;
      keyLight.shadow.bias = -0.0008;
      scene.add(keyLight);

      const rimCyan = new THREE.DirectionalLight(0x00e5ff, 1.6);
      rimCyan.position.set(-6, 4.5, -5);
      scene.add(rimCyan);

      const rimOrange = new THREE.DirectionalLight(0xff7700, 1.3);
      rimOrange.position.set(5, 3.0, -6);
      scene.add(rimOrange);

      // Epoxy Reflective Showroom Floor
      const floorGeo = new THREE.CircleGeometry(22, 48);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x0b101b,
        roughness: 0.28,
        metalness: 0.65
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);

      // Showroom Turntable Platform Ring
      const padGeo = new THREE.CylinderGeometry(2.75, 2.9, 0.05, 48);
      const padMat = new THREE.MeshStandardMaterial({ color: 0x131a2a, roughness: 0.35, metalness: 0.7 });
      const pad = new THREE.Mesh(padGeo, padMat);
      pad.position.y = 0.025;
      pad.receiveShadow = true;
      scene.add(pad);

      const neonRingGeo = new THREE.RingGeometry(2.72, 2.80, 64);
      const neonRingMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, side: THREE.DoubleSide });
      const neonRing = new THREE.Mesh(neonRingGeo, neonRingMat);
      neonRing.rotation.x = -Math.PI / 2;
      neonRing.position.y = 0.052;
      scene.add(neonRing);

      // Two-Post Hydraulic Industrial Lift Columns (Sanayi Lifti)
      const colMat = new THREE.MeshStandardMaterial({ color: 0x1e40af, roughness: 0.35, metalness: 0.75 });
      const armMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.4, metalness: 0.6 });
      [-1.78, 1.78].forEach(lx => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.9, 0.24), colMat);
        post.position.set(lx, 1.45, -0.15);
        post.castShadow = true;
        scene.add(post);

        const base = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.42), new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 }));
        base.position.set(lx, 0.03, -0.15);
        scene.add(base);

        const carriage = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.45, 0.30), armMat);
        carriage.position.set(lx, 0.38, -0.15);
        scene.add(carriage);
      });

      // Overhead Fluorescent Light Fixtures
      const tubeMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
      [-1.1, 1.1].forEach(tx => {
        const hood = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 3.2), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
        hood.position.set(tx, 3.4, 0);
        scene.add(hood);
        const tube = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 3.0), tubeMat);
        tube.position.set(tx, 3.36, 0);
        scene.add(tube);
      });

      // Back Workshop Industrial Wall Arc
      const wallGeo = new THREE.CylinderGeometry(14, 14, 6, 32, 1, true, Math.PI * 0.6, Math.PI * 0.8);
      const wallMat = new THREE.MeshStandardMaterial({ color: 0x0c111e, roughness: 0.85, side: THREE.BackSide });
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.y = 3;
      scene.add(wall);
    },

    bindOrbitControls(el) {
      el.addEventListener('pointerdown', (e) => {
        this.isDragging = true;
        this.lastPtrX = e.clientX;
        this.lastPtrY = e.clientY;
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
      });
      el.addEventListener('pointermove', (e) => {
        if (!this.isDragging) return;
        const dx = e.clientX - this.lastPtrX;
        const dy = e.clientY - this.lastPtrY;
        this.lastPtrX = e.clientX;
        this.lastPtrY = e.clientY;
        this.targetAz -= dx * 0.0085;
        this.targetEl = Math.max(0.06, Math.min(0.82, this.targetEl + dy * 0.006));
      });
      const endDrag = () => { this.isDragging = false; };
      el.addEventListener('pointerup', endDrag);
      el.addEventListener('pointercancel', endDrag);
      el.addEventListener('wheel', (e) => {
        this.targetDist = Math.max(3.4, Math.min(7.5, this.targetDist + e.deltaY * 0.003));
      }, { passive: true });
    },

    focusPart(partKey) {
      const p = CAM_PRESETS[partKey] || CAM_PRESETS.default;
      this.targetAz = p.az;
      this.targetEl = p.el;
      this.targetDist = p.dist;
      this.targetLookAt = { x: p.tx, y: p.ty, z: p.tz };
    },

    setRev(active) {
      this.revving = !!active;
    },

    resize() {
      if (!this.renderer || !this.canvas || !this.camera) return;
      const w = this.canvas.clientWidth || global.innerWidth || 1280;
      const h = this.canvas.clientHeight || global.innerHeight || 600;
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / Math.max(1, h);
      this.camera.updateProjectionMatrix();
    },

    updateCar(car) {
      if (!this.isReady || !car) return;
      const vm = car.visualMods || {};
      const up = car.upgrades || {};
      const sig = JSON.stringify({
        id: car.id,
        color: car.color,
        vm,
        susp: up.suspension || 0,
        turbo: up.turbo || 0,
        exhaust: up.exhaust || 0
      });
      if (sig === this.lastSig) return;
      this.lastSig = sig;

      const THREE = global.THREE;
      // Clear previous car meshes
      while (this.carRoot.children.length > 0) {
        const ch = this.carRoot.children[0];
        this.carRoot.remove(ch);
      }
      this.wheelGroups = [];
      this.flameMeshes = [];

      const d = CAR_DIMS[car.id] || CAR_DIMS.sahin;
      const suspDrop = Math.min(0.06, (up.suspension || 0) * 0.018);

      const chassis = new THREE.Group();
      chassis.position.y = 0.05 - suspDrop;
      this.chassisGroup = chassis;
      this.carRoot.add(chassis);

      // Paint Material based on paintFinish (0: Metallic, 1: Matte Satin, 2: Pearlescent, 3: Chrome/Carbon)
      const paintFinish = vm.paintFinish || 0;
      const bodyColor = new THREE.Color(car.color || '#ffffff');
      const bodyMat = new THREE.MeshPhysicalMaterial({
        color: paintFinish === 3 ? 0xcbd5e1 : bodyColor,
        metalness: paintFinish === 1 ? 0.35 : (paintFinish === 3 ? 0.95 : 0.72),
        roughness: paintFinish === 1 ? 0.58 : (paintFinish === 3 ? 0.08 : 0.18),
        clearcoat: paintFinish === 1 ? 0.08 : 1.0,
        clearcoatRoughness: paintFinish === 1 ? 0.45 : 0.04,
        sheen: paintFinish === 2 ? 0.8 : 0.0,
        sheenColor: new THREE.Color(0x00e5ff)
      });

      const carbonMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.32, metalness: 0.45 });
      const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.12, metalness: 0.95 });
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: paintFinish === 3 ? 0x030712 : 0x0b1322,
        metalness: 0.1,
        roughness: 0.06,
        clearcoat: 1.0,
        transparent: true,
        opacity: paintFinish === 3 ? 0.96 : 0.86
      });
      const headMat = new THREE.MeshStandardMaterial({ color: 0xe0f2fe, emissive: 0x38bdf8, emissiveIntensity: 2.5 });
      const tailMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 2.2 });

      const halfL = d.len * 0.5;
      const hw = d.wid * 0.5;

      // 1. Lower Chassis Tub (Extruded Side Silhouette for realistic curves)
      const shape = new THREE.Shape();
      const hoodLen = d.midEngine ? 0.85 : 1.15;
      shape.moveTo(-halfL + 0.05, 0.22);
      shape.lineTo(-halfL, d.hoodH - 0.02);
      shape.lineTo(d.roofRear - 0.35, d.hoodH + 0.03);
      if (!d.openTop) {
        shape.lineTo(d.roofRear, d.roofH);
        shape.lineTo(d.roofFront, d.roofH);
      } else {
        shape.lineTo(d.roofRear, d.hoodH + 0.04);
        shape.lineTo(d.roofFront, d.hoodH + 0.04);
      }
      shape.lineTo(halfL - hoodLen, d.hoodH + 0.02);
      shape.lineTo(halfL - 0.10, d.hoodH - d.noseSlope);
      shape.lineTo(halfL, 0.30);
      shape.lineTo(halfL - 0.04, 0.18);
      shape.lineTo(-halfL + 0.08, 0.18);
      shape.closePath();

      const extrudeGeo = new THREE.ExtrudeGeometry(shape, {
        depth: d.wid - 0.12,
        bevelEnabled: true,
        bevelThickness: 0.06,
        bevelSize: 0.05,
        bevelSegments: 3
      });
      extrudeGeo.center();
      // Rotate so +Z is forward nose, +Y is up
      const bodyMesh = new THREE.Mesh(extrudeGeo, bodyMat);
      bodyMesh.rotation.y = -Math.PI / 2;
      bodyMesh.position.y = d.roofH * 0.52 + 0.06;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      chassis.add(bodyMesh);

      // Greenhouse Glass Cabin
      if (!d.openTop) {
        const cabLen = (d.roofFront - d.roofRear) + 0.52;
        const cabGeo = new THREE.BoxGeometry(d.wid - 0.22, d.roofH - d.hoodH - 0.02, cabLen);
        const cab = new THREE.Mesh(cabGeo, glassMat);
        cab.position.set(0, (d.roofH + d.hoodH) * 0.5 + 0.02, (d.roofFront + d.roofRear) * 0.5);
        chassis.add(cab);
      } else {
        // Roadster Windshield + Twin Chrome Roll-Hoops
        const ws = new THREE.Mesh(new THREE.BoxGeometry(d.wid - 0.24, 0.32, 0.06), glassMat);
        ws.position.set(0, d.hoodH + 0.18, d.roofFront + 0.18);
        ws.rotation.x = -0.55;
        chassis.add(ws);
        [-0.38, 0.38].forEach(rx => {
          const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.025, 10, 20, Math.PI), chromeMat);
          hoop.position.set(rx, d.hoodH + 0.10, d.roofRear + 0.1);
          chassis.add(hoop);
        });
      }

      // Side Mirrors
      [-hw - 0.04, hw + 0.04].forEach(mx => {
        const mir = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.12), carbonMat);
        mir.position.set(mx, d.hoodH + 0.12, d.roofFront + 0.24);
        chassis.add(mir);
      });

      // Headlights & Taillights
      [-hw + 0.26, hw - 0.26].forEach(lx => {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.11, 0.08), headMat);
        hl.position.set(lx, d.hoodH - d.noseSlope - 0.06, halfL + 0.02);
        chassis.add(hl);

        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.10, 0.06), tailMat);
        tl.position.set(lx, d.hoodH - 0.06, -halfL - 0.02);
        chassis.add(tl);
      });

      // Front Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(d.wid * 0.44, 0.14, 0.06), carbonMat);
      grille.position.set(0, d.hoodH - d.noseSlope - 0.08, halfL + 0.02);
      chassis.add(grille);

      // 2. VISUAL MOD 1: FRONT BUMPER & SPLITTER (0..3)
      const fb = vm.frontBumper || 0;
      if (fb >= 1) {
        const lip = new THREE.Mesh(new THREE.BoxGeometry(d.wid + 0.04, 0.05, 0.26), fb >= 2 ? carbonMat : bodyMat);
        lip.position.set(0, 0.19, halfL + 0.06);
        lip.castShadow = true;
        chassis.add(lip);
      }
      if (fb >= 2) {
        [-hw - 0.02, hw + 0.02].forEach(cx => {
          const canard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.18), carbonMat);
          canard.position.set(cx, 0.27, halfL - 0.05);
          canard.rotation.z = cx > 0 ? -0.25 : 0.25;
          chassis.add(canard);
        });
      }
      if (fb >= 3) {
        const intercooler = new THREE.Mesh(new THREE.BoxGeometry(d.wid * 0.48, 0.16, 0.10), chromeMat);
        intercooler.position.set(0, 0.27, halfL + 0.03);
        chassis.add(intercooler);
      }

      // 3. VISUAL MOD 2: WIDEBODY KIT & SIDE SKIRTS (0..3)
      const bk = vm.bodyKit || 0;
      const wheelZFront = halfL - 0.68;
      const wheelZRear = -halfL + 0.72;
      if (bk >= 1) {
        [-hw - 0.03, hw + 0.03].forEach(sx => {
          const skirt = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, d.len * 0.56), bk >= 2 ? carbonMat : bodyMat);
          skirt.position.set(sx, 0.20, 0);
          chassis.add(skirt);
        });
      }
      if (bk >= 2) {
        const flareWidth = bk >= 3 ? 0.16 : 0.10;
        const flareMat = bk >= 3 ? carbonMat : bodyMat;
        [-hw - flareWidth * 0.35, hw + flareWidth * 0.35].forEach(fx => {
          [wheelZFront, wheelZRear].forEach(fz => {
            const flare = new THREE.Mesh(
              new THREE.TorusGeometry(0.37, flareWidth * 0.55, 10, 22, Math.PI),
              flareMat
            );
            flare.rotation.y = Math.PI / 2;
            flare.position.set(fx, 0.32, fz);
            chassis.add(flare);
          });
        });
      }

      // 4. VISUAL MOD 3: REAR SPOILER / GT WING (0..3)
      const sp = vm.spoiler || 0;
      if (sp === 1) {
        const duck = new THREE.Mesh(new THREE.BoxGeometry(d.wid * 0.88, 0.08, 0.16), carbonMat);
        duck.position.set(0, d.hoodH + 0.06, -halfL + 0.08);
        duck.rotation.x = 0.25;
        chassis.add(duck);
      } else if (sp >= 2) {
        const wingH = sp === 3 ? 0.34 : 0.22;
        const wingW = sp === 3 ? d.wid + 0.22 : d.wid * 0.96;
        [-0.42, 0.42].forEach(sx => {
          const strut = new THREE.Mesh(new THREE.BoxGeometry(0.04, wingH, 0.14), carbonMat);
          strut.position.set(sx, d.hoodH + wingH * 0.5, -halfL + 0.14);
          chassis.add(strut);
        });
        const blade = new THREE.Mesh(new THREE.BoxGeometry(wingW, 0.04, 0.28), carbonMat);
        blade.position.set(0, d.hoodH + wingH + 0.02, -halfL + 0.10);
        blade.castShadow = true;
        chassis.add(blade);
        [-wingW * 0.5, wingW * 0.5].forEach(ex => {
          const endplate = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.14, 0.32), carbonMat);
          endplate.position.set(ex, d.hoodH + wingH + 0.02, -halfL + 0.10);
          chassis.add(endplate);
        });
      }

      // 5. VISUAL MOD 4: HOOD / SCOOP / BLOWER (0..3)
      const hd = vm.hood || 0;
      if (hd === 1) {
        [-0.28, 0.28].forEach(vx => {
          const vent = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.38), carbonMat);
          vent.position.set(vx, d.hoodH + 0.02, halfL - 0.72);
          chassis.add(vent);
        });
      } else if (hd === 2) {
        const cHood = new THREE.Mesh(new THREE.BoxGeometry(d.wid * 0.72, 0.035, 1.05), carbonMat);
        cHood.position.set(0, d.hoodH + 0.015, halfL - 0.68);
        chassis.add(cHood);
      } else if (hd === 3) {
        const blower = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.18, 0.44), chromeMat);
        blower.position.set(0, d.hoodH + 0.10, halfL - 0.72);
        chassis.add(blower);
        const intake = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.09, 0.10), tailMat);
        intake.position.set(0, d.hoodH + 0.15, halfL - 0.48);
        chassis.add(intake);
      }

      // 6. VISUAL MOD 5: 4 INDEPENDENT 3D WHEELS & BRAKE CALIPERS (rims 0..3)
      const rimStyle = vm.rims || 0;
      const rimColor = rimStyle === 0 ? 0xfbbf24 : rimStyle === 1 ? 0xe2e8f0 : rimStyle === 2 ? 0xd97706 : 0x94a3b8;
      const rimMat = new THREE.MeshStandardMaterial({ color: rimColor, metalness: 0.88, roughness: 0.16 });
      const tireMat = new THREE.MeshStandardMaterial({ color: 0x0f131a, roughness: 0.75, metalness: 0.08 });
      const caliperMat = new THREE.MeshStandardMaterial({ color: rimStyle === 3 ? 0xfacc15 : 0xef4444, roughness: 0.3, metalness: 0.6 });

      const spokeCount = rimStyle === 1 ? 10 : (rimStyle === 2 ? 6 : (rimStyle === 3 ? 8 : 5));
      const wheelX = hw + (bk >= 2 ? 0.04 : -0.02);

      [wheelZFront, wheelZRear].forEach((wz, idx) => {
        [-wheelX, wheelX].forEach(wx => {
          const wWrap = new THREE.Group();
          wWrap.position.set(wx, 0.33, wz);

          // Static Caliper inside wheel hub
          const cal = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.11), caliperMat);
          cal.position.set(wx > 0 ? -0.04 : 0.04, 0.09, -0.10);
          wWrap.add(cal);

          // Spinning Wheel Group
          const spinGrp = new THREE.Group();
          const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.33, 0.33, 0.24, 28), tireMat);
          tire.rotation.z = Math.PI / 2;
          tire.castShadow = true;
          spinGrp.add(tire);

          const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.25, 24), chromeMat);
          barrel.rotation.z = Math.PI / 2;
          spinGrp.add(barrel);

          const inner = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.255, 24), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 }));
          inner.rotation.z = Math.PI / 2;
          spinGrp.add(inner);

          for (let s = 0; s < spokeCount; s++) {
            const ang = (s / spokeCount) * Math.PI * 2;
            const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.036, 0.42), rimMat);
            spoke.rotation.x = ang;
            spinGrp.add(spoke);
          }

          const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.27, 16), chromeMat);
          hub.rotation.z = Math.PI / 2;
          spinGrp.add(hub);

          wWrap.add(spinGrp);
          this.carRoot.add(wWrap);
          this.wheelGroups.push({ mesh: spinGrp, isRear: idx === 1 });
        });
      });

      // 7. VISUAL MOD 6: EXHAUST TIPS & UNDERGLOW NEON (0..3)
      const ex = vm.exhaustNeon || 0;
      const tipOffsets = ex === 0 ? [-0.45] : ex === 1 ? [-0.45, 0.45] : [-0.52, -0.38, 0.38, 0.52];
      tipOffsets.forEach(tx => {
        const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.18, 12), chromeMat);
        tip.rotation.x = Math.PI / 2;
        tip.position.set(tx, 0.21, -halfL - 0.04);
        chassis.add(tip);

        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(0.06, 0.45, 10),
          new THREE.MeshBasicMaterial({ color: 0xff7700, transparent: true, opacity: 0.9 })
        );
        flame.rotation.x = -Math.PI / 2;
        flame.position.set(tx, 0.21, -halfL - 0.32);
        flame.visible = false;
        chassis.add(flame);
        this.flameMeshes.push(flame);
      });

      const neonColors = [0x00e5ff, 0x00e5ff, 0xff7700, 0xa855f7];
      const nCol = neonColors[ex] || 0x00e5ff;
      const ugMat = new THREE.MeshBasicMaterial({ color: nCol, transparent: true, opacity: ex > 0 ? 0.55 : 0.22 });
      this.underglowMesh = new THREE.Mesh(new THREE.PlaneGeometry(d.wid * 1.15, d.len * 0.82), ugMat);
      this.underglowMesh.rotation.x = -Math.PI / 2;
      this.underglowMesh.position.y = 0.055;
      this.carRoot.add(this.underglowMesh);
    },

    startLoop() {
      const tick = (now) => {
        this.animId = requestAnimationFrame(tick);
        const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTs) / 1000));
        this.lastTs = now;

        // Smooth camera damping
        const k = 1 - Math.exp(-7.0 * dt);
        if (!this.isDragging) {
          this.targetAz += dt * 0.08; // Gentle luxury turntable drift
        }
        this.az += (this.targetAz - this.az) * k;
        this.el += (this.targetEl - this.el) * k;
        this.dist += (this.targetDist - this.dist) * k;
        this.lookAt.x += (this.targetLookAt.x - this.lookAt.x) * k;
        this.lookAt.y += (this.targetLookAt.y - this.lookAt.y) * k;
        this.lookAt.z += (this.targetLookAt.z - this.lookAt.z) * k;

        if (this.camera) {
          const cosEl = Math.cos(this.el);
          this.camera.position.set(
            this.lookAt.x + Math.sin(this.az) * cosEl * this.dist,
            this.lookAt.y + Math.sin(this.el) * this.dist,
            this.lookAt.z + Math.cos(this.az) * cosEl * this.dist
          );
          this.camera.lookAt(this.lookAt.x, this.lookAt.y, this.lookAt.z);
        }

        // Revving torque shake, rear wheel spin & exhaust flames
        if (this.chassisGroup) {
          if (this.revving) {
            this.chassisGroup.rotation.z = Math.sin(now * 0.045) * 0.025;
            this.chassisGroup.position.y = 0.05 + Math.sin(now * 0.06) * 0.012;
          } else {
            this.chassisGroup.rotation.z *= 0.85;
          }
        }
        for (const w of this.wheelGroups) {
          if (this.revving && w.isRear) {
            w.mesh.rotation.x += dt * 24;
          }
        }
        for (const f of this.flameMeshes) {
          f.visible = this.revving && Math.random() < 0.65;
          if (f.visible) f.scale.set(1, 0.7 + Math.random() * 0.8, 1);
        }

        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      };
      this.animId = requestAnimationFrame(tick);
    }
  };

  global.Garaj3D = Garaj3D;
})(typeof window !== 'undefined' ? window : globalThis);
