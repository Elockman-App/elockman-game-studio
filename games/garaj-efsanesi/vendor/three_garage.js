/**
 * Garaj Efsanesi — 3D WebGL Showroom Engine (Three.js r187 + Blender GLB + RoomEnvironment IBL)
 * Exposes window.Garaj3D for 360-degree interactive car inspection & live NFS bodykit preview.
 */
(function (global) {
  'use strict';

  const Garaj3D = {
    isReady: false,
    active: false,
    canvas: null,
    renderer: null,
    scene: null,
    camera: null,
    carRoot: null,
    turntable: null,
    underglowMesh: null,
    headlightBeams: [],
    flameMeshes: [],
    curCarId: null,
    curCar: null,
    glbCache: {},
    glbLoading: {},
    loader: null,
    isRevving: false,
    revPhase: 0,
    pointerDown: false,
    lastX: 0,
    lastY: 0,
    orbitTheta: 0.72,
    orbitPhi: 1.24,
    orbitDist: 4.9,
    targetTheta: 0.72,
    targetPhi: 1.24,
    targetDist: 4.9,
    targetLook: null,
    curLook: null,
    autoSpinSpeed: 0.14,
    rafId: null,
    lastTime: 0,

    init(canvasEl) {
      if (this.isReady) return true;
      if (!canvasEl || !global.THREE) return false;
      const THREE = global.THREE;
      this.canvas = canvasEl;

      try {
        this.renderer = new THREE.WebGLRenderer({
          canvas: canvasEl,
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        });
      } catch (e) {
        return false;
      }

      this.renderer.setPixelRatio(Math.min(2, global.devicePixelRatio || 1));
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.18;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color('#070b14');
      this.scene.fog = new THREE.FogExp2('#070b14', 0.045);

      // IBL Environment (RoomEnvironment + PMREMGenerator) so clearcoat paint & glass reflect studio softboxes
      if (THREE.RoomEnvironment && THREE.PMREMGenerator) {
        const pmrem = new THREE.PMREMGenerator(this.renderer);
        const envRT = pmrem.fromScene(new THREE.RoomEnvironment(), 0.04);
        this.scene.environment = envRT.texture;
        this.scene.environmentIntensity = 1.25;
        pmrem.dispose();
      }

      this.camera = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 60);
      this.targetLook = new THREE.Vector3(0, 0.58, 0);
      this.curLook = new THREE.Vector3(0, 0.58, 0);

      if (THREE.GLTFLoader) {
        this.loader = new THREE.GLTFLoader();
      }

      this._buildShowroom();
      this.carRoot = new THREE.Group();
      this.carRoot.position.y = 0.055; // Seated cleanly ON TOP of y=0.05 turntable
      this.scene.add(this.carRoot);

      this._bindControls();
      this.resize();
      this.isReady = true;
      this.active = true;
      this.startLoop();
      return true;
    },

    setActive(flag) {
      this.active = !!flag;
      if (this.active && this.isReady && !this.rafId) {
        this.lastTime = performance.now();
        this.startLoop();
      }
    },

    _makeRadialGlowTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 128;
      const ctx = c.getContext('2d');
      const g = ctx.createRadialGradient(128, 64, 8, 128, 64, 122);
      g.addColorStop(0, 'rgba(0, 229, 255, 0.72)');
      g.addColorStop(0.55, 'rgba(0, 229, 255, 0.22)');
      g.addColorStop(1, 'rgba(0, 229, 255, 0.0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 256, 128);
      const tex = new global.THREE.CanvasTexture(c);
      tex.colorSpace = global.THREE.SRGBColorSpace;
      return tex;
    },

    _buildShowroom() {
      const THREE = global.THREE;

      const hemi = new THREE.HemisphereLight('#bcd9ff', '#0c1220', 0.85);
      this.scene.add(hemi);

      const keyLight = new THREE.SpotLight('#ffffff', 95, 22, Math.PI * 0.34, 0.45, 1.4);
      keyLight.position.set(4.5, 6.2, 4.5);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      this.scene.add(keyLight);

      const rimLight = new THREE.SpotLight('#38bdf8', 55, 20, Math.PI * 0.4, 0.6, 1.3);
      rimLight.position.set(-5.0, 4.0, -4.0);
      this.scene.add(rimLight);

      // Curved 3D Workshop Backdrop Wall (textured with img/bg_workshop.webp)
      const texLoader = new THREE.TextureLoader();
      texLoader.load('img/bg_workshop.webp', (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const wallGeo = new THREE.CylinderGeometry(11.5, 11.5, 6.4, 48, 1, true, Math.PI * 0.2, Math.PI * 1.6);
        const wallMat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, transparent: true, opacity: 0.75 });
        const wall = new THREE.Mesh(wallGeo, wallMat);
        wall.position.y = 2.8;
        this.scene.add(wall);
      });

      // Overhead studio LED light strips
      const stripGeo = new THREE.BoxGeometry(3.6, 0.05, 0.24);
      const stripMat = new THREE.MeshBasicMaterial({ color: '#e0f2fe' });
      [-1.1, 1.1].forEach((zPos) => {
        const strip = new THREE.Mesh(stripGeo, stripMat);
        strip.position.set(0, 3.8, zPos);
        this.scene.add(strip);
      });

      // Reflective Dark Epoxy Workshop Floor
      const floorGeo = new THREE.CircleGeometry(14, 64);
      const floorMat = new THREE.MeshStandardMaterial({
        color: '#0b101b',
        roughness: 0.22,
        metalness: 0.45,
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      this.scene.add(floor);

      // Rotating Turntable Platform (top at y = 0.05)
      this.turntable = new THREE.Group();
      const discGeo = new THREE.CylinderGeometry(2.65, 2.75, 0.05, 64);
      const discMat = new THREE.MeshStandardMaterial({
        color: '#111827',
        roughness: 0.16,
        metalness: 0.78,
      });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.position.y = 0.025;
      disc.receiveShadow = true;
      this.turntable.add(disc);

      const ringGeo = new THREE.RingGeometry(2.58, 2.66, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: '#00e5ff', side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.052;
      this.turntable.add(ring);
      this.scene.add(this.turntable);

      // Hydraulic Lift Posts moved outward/rearward so they NEVER cross between camera and car
      const postGeo = new THREE.BoxGeometry(0.18, 3.0, 0.18);
      const postMat = new THREE.MeshStandardMaterial({ color: '#1d4ed8', metalness: 0.6, roughness: 0.35 });
      const armMat = new THREE.MeshStandardMaterial({ color: '#f59e0b', metalness: 0.5, roughness: 0.4 });
      [-2.45, 2.45].forEach((px) => {
        const post = new THREE.Mesh(postGeo, postMat);
        post.position.set(px, 1.5, -1.35);
        this.scene.add(post);
        const pad = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.36, 0.24), armMat);
        pad.position.set(px, 0.45, -1.35);
        this.scene.add(pad);
      });

      // Soft radial alpha underglow pool (never a hard rectangle)
      const ugMat = new THREE.MeshBasicMaterial({
        map: this._makeRadialGlowTexture(),
        transparent: true,
        opacity: 0.0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      this.underglowMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.5), ugMat);
      this.underglowMesh.rotation.x = -Math.PI / 2;
      this.underglowMesh.position.y = 0.053;
      this.scene.add(this.underglowMesh);
    },

    _applyCarMaterialsAndMods(root, car) {
      const THREE = global.THREE;
      const vm = (car && car.visualMods) || {};
      const bodyColor = new THREE.Color((car && car.color) || '#ffffff');
      const finish = vm.paintFinish || 0;

      const roughness = finish === 1 ? 0.55 : (finish === 3 ? 0.06 : 0.12);
      const metalness = finish === 3 ? 0.96 : (finish === 1 ? 0.35 : 0.78);
      const clearcoat = finish === 1 ? 0.08 : 1.0;

      root.traverse((obj) => {
        if (!obj.isMesh) return;
        obj.castShadow = true;
        obj.receiveShadow = true;

        // Toggleable NFS Body Kit nodes from Blender GLB
        if (obj.name.startsWith('Mod_Splitter')) obj.visible = (vm.frontBumper || 0) > 0;
        else if (obj.name.startsWith('Mod_Skirt')) obj.visible = (vm.bodyKit || 0) > 0;
        else if (obj.name.startsWith('Mod_Wing')) obj.visible = (vm.spoiler || 0) > 0;
        else if (obj.name.startsWith('Mod_Hood')) obj.visible = (vm.hood || 0) > 0;
        else if (obj.name.startsWith('Mod_Exhaust')) obj.visible = (vm.exhaustNeon || 0) >= 1;

        if (obj.material && obj.material.name === 'CarPaint') {
          obj.material = new THREE.MeshPhysicalMaterial({
            color: bodyColor,
            metalness,
            roughness,
            clearcoat,
            clearcoatRoughness: 0.08,
          });
        } else if (obj.material && obj.material.name === 'Rim') {
          const rimColors = ['#c89b3c', '#e2e8f0', '#a16207', '#475569'];
          obj.material.color.set(rimColors[vm.rims || 0] || '#e2e8f0');
        }
      });

      if (this.underglowMesh) {
        const hasNeon = (vm.exhaustNeon || 0) >= 2;
        this.underglowMesh.material.opacity = hasNeon ? 0.85 : 0.0;
        this.underglowMesh.material.color.set(finish === 2 ? '#a855f7' : '#00e5ff');
      }
    },

    updateCar(car) {
      if (!this.isReady || !car) return;
      this.curCar = car;
      const carId = car.id || 'sahin';

      if (this.glbCache[carId]) {
        if (this.curCarId !== carId) {
          this._mountCarScene(carId, this.glbCache[carId]);
        }
        if (this.carRoot.children[0]) {
          this._applyCarMaterialsAndMods(this.carRoot.children[0], car);
        }
        return;
      }

      if (this.loader && !this.glbLoading[carId]) {
        this.glbLoading[carId] = true;
        const onLoaded = (gltf) => {
          this.glbCache[carId] = gltf.scene;
          this.glbLoading[carId] = false;
          if ((this.curCar && this.curCar.id) === carId) {
            this._mountCarScene(carId, gltf.scene);
            this._applyCarMaterialsAndMods(this.carRoot.children[0], this.curCar);
          }
        };
        if (global.GARAJ_GLB_B64 && global.GARAJ_GLB_B64[carId]) {
          try {
            const bin = atob(global.GARAJ_GLB_B64[carId]);
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
            this.loader.parse(bytes.buffer, '', onLoaded, () => { this.glbLoading[carId] = false; });
            return;
          } catch (e) {
            this.glbLoading[carId] = false;
          }
        }
        this.loader.load(
          'models/car_' + carId + '.glb',
          onLoaded,
          undefined,
          () => {
            this.glbLoading[carId] = false;
          }
        );
      }
    },

    _mountCarScene(carId, sceneProto) {
      this.curCarId = carId;
      while (this.carRoot.children.length > 0) {
        this.carRoot.remove(this.carRoot.children[0]);
      }
      const clone = sceneProto.clone(true);
      this.carRoot.add(clone);
    },

    focusPart(partKey) {
      const presets = {
        default:     { theta: 0.72,  phi: 1.24, dist: 4.9,  look: [0, 0.58, 0],     spin: 0.14 },
        frontBumper: { theta: 0.32,  phi: 1.32, dist: 3.3,  look: [1.55, 0.34, 0],  spin: 0.0 },
        hood:        { theta: 0.55,  phi: 1.05, dist: 3.4,  look: [1.05, 0.78, 0],  spin: 0.0 },
        bodyKit:     { theta: 1.45,  phi: 1.28, dist: 4.3,  look: [0, 0.45, 0],     spin: 0.04 },
        rims:        { theta: 1.25,  phi: 1.36, dist: 2.85, look: [1.15, 0.34, 0.6],spin: 0.0 },
        spoiler:     { theta: -2.45, phi: 1.12, dist: 3.35, look: [-1.65, 0.85, 0], spin: 0.0 },
        exhaustNeon: { theta: -2.75, phi: 1.34, dist: 3.3,  look: [-1.6, 0.25, 0],  spin: 0.0 },
        paintFinish: { theta: 0.82,  phi: 1.15, dist: 4.4,  look: [0, 0.65, 0],     spin: 0.22 },
      };
      const p = presets[partKey] || presets.default;
      this.targetTheta = p.theta;
      this.targetPhi = p.phi;
      this.targetDist = p.dist;
      this.targetLook.set(p.look[0], p.look[1], p.look[2]);
      this.autoSpinSpeed = p.spin;
    },

    setRev(active) {
      this.isRevving = !!active;
    },

    _bindControls() {
      const c = this.canvas;
      c.style.touchAction = 'none';
      c.addEventListener('pointerdown', (e) => {
        this.pointerDown = true;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.autoSpinSpeed = 0;
      });
      global.addEventListener('pointermove', (e) => {
        if (!this.pointerDown) return;
        const dx = e.clientX - this.lastX;
        const dy = e.clientY - this.lastY;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.targetTheta -= dx * 0.008;
        this.targetPhi = Math.max(0.65, Math.min(1.44, this.targetPhi - dy * 0.006));
      });
      global.addEventListener('pointerup', () => { this.pointerDown = false; });
      c.addEventListener('wheel', (e) => {
        e.preventDefault();
        this.targetDist = Math.max(2.6, Math.min(6.6, this.targetDist + e.deltaY * 0.0025));
      }, { passive: false });
    },

    resize() {
      if (!this.renderer || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = Math.max(300, rect.width || this.canvas.clientWidth || 640);
      const h = Math.max(180, rect.height || this.canvas.clientHeight || 360);
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    },

    startLoop() {
      const tick = (now) => {
        if (!this.active) {
          this.rafId = null;
          return;
        }
        this.rafId = requestAnimationFrame(tick);
        const dt = Math.min(0.05, (now - (this.lastTime || now)) / 1000);
        this.lastTime = now;

        if (!this.pointerDown && this.autoSpinSpeed !== 0) {
          this.targetTheta += this.autoSpinSpeed * dt;
        }

        const k = 1 - Math.exp(-8 * dt);
        this.orbitTheta += (this.targetTheta - this.orbitTheta) * k;
        this.orbitPhi += (this.targetPhi - this.orbitPhi) * k;
        this.orbitDist += (this.targetDist - this.orbitDist) * k;
        this.curLook.lerp(this.targetLook, k);

        const sinP = Math.sin(this.orbitPhi);
        this.camera.position.set(
          this.curLook.x + this.orbitDist * sinP * Math.cos(this.orbitTheta),
          this.curLook.y + this.orbitDist * Math.cos(this.orbitPhi),
          this.curLook.z + this.orbitDist * sinP * Math.sin(this.orbitTheta)
        );
        this.camera.lookAt(this.curLook);

        if (this.carRoot) {
          if (this.isRevving) {
            this.revPhase += dt * 48;
            this.carRoot.rotation.x = Math.sin(this.revPhase) * 0.012;
            this.carRoot.position.y = 0.055 + Math.abs(Math.sin(this.revPhase * 0.7)) * 0.008;
          } else {
            this.carRoot.rotation.x *= Math.exp(-10 * dt);
            this.carRoot.position.y = 0.055;
          }
        }

        this.renderer.render(this.scene, this.camera);
      };
      this.rafId = requestAnimationFrame(tick);
    },
  };

  global.Garaj3D = Garaj3D;
})(typeof window !== 'undefined' ? window : globalThis);
