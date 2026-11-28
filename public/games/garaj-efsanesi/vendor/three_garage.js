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
    paintTextureCache: {},
    maxCachedModels: 3,
    glbLoading: {},
    workshopPropsGroup: null,
    workshopPropsLoaded: 0,
    dynoRollers: [],
    liftCarriages: [],
    status: 'idle',
    loader: null,
    isRevving: false,
    revPhase: 0,
    pointerDown: false,
    lastX: 0,
    lastY: 0,
    orbitTheta: 0.72,
    orbitPhi: 1.24,
    orbitDist: 7.4,
    targetTheta: 0.72,
    targetPhi: 1.24,
    targetDist: 7.4,
    targetLook: null,
    curLook: null,
    // Keep the showroom static while idle so WebGL can stop drawing between inputs.
    autoSpinSpeed: 0,
    rafId: null,
    lastTime: 0,
    mobileQualityProfile: false,
    renderQuality: null,

    _setStatus(status, carId) {
      this.status = status;
      global.dispatchEvent(new CustomEvent('garage3dstatus', { detail: { status, carId: carId || null } }));
    },

    init(canvasEl) {
      if (this.isReady) return true;
      if (!canvasEl || !global.THREE) {
        this._setStatus('webgl-error');
        return false;
      }
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
        this._setStatus('webgl-error');
        return false;
      }

      const devicePixelRatio = global.devicePixelRatio || 1;
      const touchViewport = (global.navigator?.maxTouchPoints || 0) > 0 &&
        Math.min(global.innerWidth || 0, global.innerHeight || 0) <= 1000;
      this.mobileQualityProfile = touchViewport;
      const maxPixelRatio = Math.min(2, devicePixelRatio, touchViewport ? 1.5 : 2);
      this.renderQuality = {
        maxPixelRatio,
        minPixelRatio: Math.min(maxPixelRatio, touchViewport ? 1 : 1.25),
        currentPixelRatio: maxPixelRatio,
        frameCount: 0,
        frameTimeTotal: 0,
        lastChangeAt: performance.now(),
      };
      this.renderer.setPixelRatio(maxPixelRatio);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 0.9;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFShadowMap;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color('#070b14');
      this.scene.fog = new THREE.FogExp2('#070b14', 0.045);

      // IBL Environment (RoomEnvironment + PMREMGenerator) so clearcoat paint & glass reflect studio softboxes
      if (THREE.RoomEnvironment && THREE.PMREMGenerator) {
        const pmrem = new THREE.PMREMGenerator(this.renderer);
        const envRT = pmrem.fromScene(new THREE.RoomEnvironment(), 0.04);
        this.scene.environment = envRT.texture;
        this.scene.environmentIntensity = 0.72;
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
      this._setStatus('ready');
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

    _makeWorkshopSurfaceTexture() {
      const THREE = global.THREE;
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      const image = ctx.createImageData(canvas.width, canvas.height);
      let seed = 9137;
      for (let i = 0; i < image.data.length; i += 4) {
        seed = (seed * 16807) % 2147483647;
        const grain = (seed / 2147483647 - 0.5) * 24;
        const value = 214 + grain;
        image.data[i] = value;
        image.data[i + 1] = value + 1;
        image.data[i + 2] = value + 2;
        image.data[i + 3] = 255;
      }
      ctx.putImageData(image, 0, 0);
      ctx.strokeStyle = 'rgba(38, 45, 52, 0.18)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 22; i++) {
        const x = (i * 67) % 256;
        const y = (i * 109) % 256;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 8 + (i % 11), y + ((i % 3) - 1));
        ctx.stroke();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(8, 8);
      texture.anisotropy = Math.min(4, this.renderer.capabilities.getMaxAnisotropy());
      return texture;
    },

    _addWorkshopInstances(THREE, name, dimensions, material, transforms) {
      if (!transforms || transforms.length === 0) return null;
      const geometry = new THREE.BoxGeometry(dimensions[0], dimensions[1], dimensions[2]);
      const mesh = new THREE.InstancedMesh(geometry, material, transforms.length);
      const transform = new THREE.Object3D();
      transforms.forEach((item, index) => {
        transform.position.set(item[0], item[1], item[2]);
        transform.rotation.set(item[3] || 0, item[4] || 0, item[5] || 0);
        transform.updateMatrix();
        mesh.setMatrixAt(index, transform.matrix);
      });
      mesh.name = name;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.frustumCulled = true;
      mesh.instanceMatrix.needsUpdate = true;
      this.scene.add(mesh);
      return mesh;
    },

    _buildWorkshopEnvironment() {
      const THREE = global.THREE;
      const makeMaterial = (name, color, metalness, roughness) => new THREE.MeshStandardMaterial({
        name,
        color,
        metalness,
        roughness,
      });
      const wallMat = makeMaterial('Workshop Concrete', '#293137', 0.05, 0.92);
      const panelMat = makeMaterial('Workshop Wall Panels', '#1d252b', 0.28, 0.7);
      const steelMat = makeMaterial('Workshop Structural Steel', '#46515a', 0.76, 0.36);
      const shutterMat = makeMaterial('Workshop Roller Shutter', '#11181d', 0.42, 0.62);
      const glassMat = makeMaterial('Workshop Smoked Glass', '#10212a', 0.48, 0.22);
      const safetyMat = makeMaterial('Workshop Safety Yellow', '#d58b22', 0.38, 0.42);
      const benchMat = makeMaterial('Workshop Workbench', '#343d43', 0.64, 0.42);
      const lightMat = new THREE.MeshBasicMaterial({ color: '#c5e5f5' });
      const addBox = (name, dimensions, position, material) => {
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(dimensions[0], dimensions[1], dimensions[2]),
          material
        );
        mesh.name = name;
        mesh.position.set(position[0], position[1], position[2]);
        mesh.castShadow = false;
        mesh.receiveShadow = false;
        this.scene.add(mesh);
        return mesh;
      };

      // Enclosed 3D service bay keeps real parallax during a full camera orbit.
      const roomEdge = 13.8;
      const roomHeight = 7.0;
      addBox('Workshop Rear Wall', [roomEdge * 2, roomHeight, 0.3], [0, roomHeight / 2, -roomEdge], wallMat);
      addBox('Workshop Front Wall', [roomEdge * 2, roomHeight, 0.3], [0, roomHeight / 2, roomEdge], wallMat);
      addBox('Workshop Left Wall', [0.3, roomHeight, roomEdge * 2], [-roomEdge, roomHeight / 2, 0], wallMat);
      addBox('Workshop Right Wall', [0.3, roomHeight, roomEdge * 2], [roomEdge, roomHeight / 2, 0], wallMat);

      // Rear roller door, wall ribs, window units, and protective wall rails.
      addBox('Workshop Roller Door Recess', [5.5, 4.0, 0.12], [0, 2.0, -13.61], shutterMat);
      this._addWorkshopInstances(
        THREE,
        'Workshop Roller Door Slats',
        [5.1, 0.065, 0.09],
        steelMat,
        Array.from({ length: 16 }, (_, i) => [0, 0.34 + i * 0.225, -13.51])
      );
      this._addWorkshopInstances(
        THREE,
        'Rear Wall Structural Columns',
        [0.18, roomHeight, 0.24],
        steelMat,
        [-12, -8, -4, 4, 8, 12].map((x) => [x, roomHeight / 2, -13.55])
      );
      this._addWorkshopInstances(
        THREE,
        'Rear Wall Safety Rails',
        [27.0, 0.10, 0.10],
        benchMat,
        [0.34, 0.72, 1.1].map((y) => [0, y, -13.57])
      );
      this._addWorkshopInstances(
        THREE,
        'Rear Workshop Windows',
        [2.2, 0.92, 0.08],
        glassMat,
        [-9, -6, 6, 9].map((x) => [x, 5.25, -13.57])
      );
      this._addWorkshopInstances(
        THREE,
        'Side Workshop Windows',
        [0.08, 0.92, 2.0],
        glassMat,
        [-7, -3, 1, 5, 9].flatMap((z) => [
          [-13.57, 5.25, z],
          [13.57, 5.25, z],
        ])
      );
      this._addWorkshopInstances(
        THREE,
        'Side Wall Structural Columns',
        [0.20, roomHeight, 0.20],
        steelMat,
        [-12, -8, -4, 0, 4, 8, 12].flatMap((z) => [
          [-13.55, roomHeight / 2, z],
          [13.55, roomHeight / 2, z],
        ])
      );

      // Repeated ceiling structure is instanced to keep the mobile draw-call count low.
      this._addWorkshopInstances(
        THREE,
        'Workshop Ceiling Cross Beams',
        [27.0, 0.16, 0.18],
        steelMat,
        [-12, -8, -4, 0, 4, 8, 12].map((z) => [0, 6.55, z])
      );
      this._addWorkshopInstances(
        THREE,
        'Workshop Ceiling Long Beams',
        [0.16, 0.16, 27.0],
        steelMat,
        [-9, 0, 9].map((x) => [x, 6.55, 0])
      );
      this._addWorkshopInstances(
        THREE,
        'Workshop Overhead LED Fixtures',
        [3.6, 0.045, 0.28],
        lightMat,
        [-9, -4.5, 0, 4.5, 9].map((z) => [0, 6.35, z])
      );

      // Wall-side benches and tool cabinets sit outside the vehicle's orbit and hero framing.
      [-1, 1].forEach((side) => {
        const x = side * 8.2;
        addBox('Workshop Tool Cabinet', [2.0, 0.72, 0.68], [x, 0.38, -12.8], panelMat);
        addBox('Workshop Bench Top', [2.35, 0.12, 0.92], [x, 0.82, -12.55], benchMat);
        this._addWorkshopInstances(
          THREE,
          'Workshop Tool Drawer Faces',
          [0.82, 0.11, 0.035],
          steelMat,
          [0.25, 0.45, 0.65].map((y) => [x, y, -12.44])
        );
        addBox('Workshop Tool Board', [2.2, 1.15, 0.08], [x, 2.45, -13.55], panelMat);
        this._addWorkshopInstances(
          THREE,
          'Workshop Hanging Tools',
          [0.06, 0.48, 0.06],
          safetyMat,
          [-0.72, -0.36, 0, 0.36, 0.72].map((offset, i) => [x + offset, 2.42 + (i % 2) * 0.08, -13.48])
        );
      });

      // A few high-contrast service details make the large walls read at mobile resolution.
      this._addWorkshopInstances(
        THREE,
        'Workshop Cable Conduits',
        [0.07, 0.07, 26.8],
        safetyMat,
        [-13.54, 13.54].flatMap((x) => [
          [x, 5.82, 0],
          [x, 0.24, 0],
        ])
      );
    },
    _buildShowroom() {
      const THREE = global.THREE;

      const hemi = new THREE.HemisphereLight('#bcd9ff', '#131c26', 0.62);
      this.scene.add(hemi);

      const keyLight = new THREE.SpotLight('#ffffff', 40, 22, Math.PI * 0.34, 0.52, 1.4);
      keyLight.position.set(4.5, 6.2, 4.5);
      keyLight.castShadow = true;
      const shadowResolution = this.mobileQualityProfile ? 512 : 1024;
      keyLight.shadow.mapSize.set(shadowResolution, shadowResolution);
      this.scene.add(keyLight);

      const rimLight = new THREE.SpotLight('#38bdf8', 30, 20, Math.PI * 0.4, 0.6, 1.3);
      rimLight.position.set(-5.0, 4.0, -4.0);
      this.scene.add(rimLight);

      // Fully modeled workshop environment; no photo-textured backdrop.
      this._buildWorkshopEnvironment();

      // Overhead studio LED light strips
      const stripGeo = new THREE.BoxGeometry(3.6, 0.05, 0.24);
      const stripMat = new THREE.MeshBasicMaterial({ color: '#e0f2fe' });
      [-1.1, 1.1].forEach((zPos) => {
        const strip = new THREE.Mesh(stripGeo, stripMat);
        strip.position.set(0, 3.8, zPos);
        this.scene.add(strip);
      });

      // Subtle concrete grain keeps the broad workshop floor from reading as a flat plane.
      const surfaceTexture = this._makeWorkshopSurfaceTexture();
      const floorGeo = new THREE.CircleGeometry(14, 64);
      const floorMat = new THREE.MeshStandardMaterial({
        color: '#242a30',
        map: surfaceTexture,
        roughness: 0.74,
        metalness: 0.12,
      });
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      this.scene.add(floor);

      // Rotating Turntable Platform (top at y = 0.05)
      this.turntable = new THREE.Group();
      const discGeo = new THREE.CylinderGeometry(2.65, 2.75, 0.05, 64);
      const discMat = new THREE.MeshStandardMaterial({
        color: '#343c44',
        map: surfaceTexture,
        roughness: 0.48,
        metalness: 0.32,
      });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.position.y = 0.025;
      disc.receiveShadow = true;
      this.turntable.add(disc);

      const ringGeo = new THREE.RingGeometry(2.58, 2.66, 64);
      const ringMat = new THREE.MeshStandardMaterial({ color: '#4a858c', emissive: '#17373b', emissiveIntensity: 0.28, metalness: 0.52, roughness: 0.38, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.052;
      this.turntable.add(ring);
      this.scene.add(this.turntable);

      // Load 6 sculpted 3D workshop equipment props (Sanayi_01: lift, tool cabinet, compressor, workbench, dyno, worklamp)
      this.workshopPropsGroup = new THREE.Group();
      this.workshopPropsGroup.name = 'WorkshopPropsGroup';
      this.scene.add(this.workshopPropsGroup);
      this.dynoRollers = [];
      this.liftCarriages = [];
      this.workshopPropsLoaded = 0;
      this._loadWorkshopProps();

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

    _loadWorkshopProps() {
      if (!this.loader || !this.workshopPropsGroup) return;
      const THREE = global.THREE;
      const propsSpec = [
        { file: '01_lift.glb', pos: [0, 0, -8.2], rotY: 0, scale: 1.0, isLift: true },
        { file: '02_takim_dolabi.glb', pos: [-5.8, 0, -9.8], rotY: 0.25, scale: 1.05 },
        { file: '03_kompresor.glb', pos: [6.4, 0, -9.4], rotY: -0.35, scale: 1.05 },
        { file: '04_tezgah.glb', pos: [-7.2, 0, -4.5], rotY: Math.PI * 0.45, scale: 1.05 },
        { file: '05_dyno.glb', pos: [5.8, 0, -5.2], rotY: -0.45, scale: 0.95, isDyno: true },
        { file: '06_seyyar_lamba.glb', pos: [4.6, 0, -2.4], rotY: -0.95, scale: 0.92, isLamp: true },
      ];

      propsSpec.forEach((spec) => {
        this.loader.load(
          'models/workshop/' + spec.file,
          (gltf) => {
            if (!gltf || !gltf.scene || !this.workshopPropsGroup) return;
            const root = gltf.scene;
            root.name = 'WorkshopProp_' + spec.file;
            root.position.set(spec.pos[0], spec.pos[1], spec.pos[2]);
            root.rotation.y = spec.rotY || 0;
            const s = spec.scale || 1.0;
            root.scale.set(s, s, s);

            root.traverse((node) => {
              if (node.isMesh) {
                node.castShadow = !this.mobileQualityProfile;
                node.receiveShadow = true;
              }
              const nName = (node.name || '').toLowerCase();
              if (spec.isDyno && nName.includes('roller_')) {
                this.dynoRollers.push(node);
              }
              if (spec.isLift && (nName.includes('carriage_l') || nName.includes('carriage_r'))) {
                this.liftCarriages.push(node);
              }
            });

            if (spec.isLamp) {
              const lampLight = new THREE.PointLight('#fff3d1', 6.5, 7.5, 1.6);
              lampLight.position.set(0, 1.55, 0.22);
              root.add(lampLight);
            }

            this.workshopPropsGroup.add(root);
            this.workshopPropsLoaded += 1;
            this.startLoop();
          },
          undefined,
          () => {
            // Gracefully ignore missing optional workshop prop
          }
        );
      });
    },

    _applyCarMaterialsAndMods(root, car) {
      const THREE = global.THREE;
      const vm = (car && car.visualMods) || {};
      const bodyColor = new THREE.Color((car && car.color) || '#ffffff');
      const finish = Math.max(0, Math.min(3, Number(vm.paintFinish) || 0));
      const finishProfiles = [
        { metalness: 0.4, roughness: 0.32, clearcoat: 0.42, clearcoatRoughness: 0.12 },
        { metalness: 0.48, roughness: 0.21, clearcoat: 0.92, clearcoatRoughness: 0.05 },
        { metalness: 0.04, roughness: 0.66, clearcoat: 0.03, clearcoatRoughness: 0.24 },
        {
          metalness: 0.92, roughness: 0.08, clearcoat: 0.62, clearcoatRoughness: 0.07,
          iridescence: 0.55, iridescenceIOR: 1.3,
          iridescenceThicknessMinimum: 120, iridescenceThicknessMaximum: 650,
        },
      ];
      const paintProfile = finishProfiles[finish];

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

        const oName = (obj.name || '').toLowerCase();
        const bodyObject = oName === 'body' || oName.startsWith('body_') || oName.startsWith('body.');
        const rimColors = ['#c89b3c', '#e2e8f0', '#a16207', '#475569'];
        const rimColor = rimColors[vm.rims || 0] || '#e2e8f0';
        const originalMaterials = Array.isArray(obj.material) ? obj.material : [obj.material];
        const updatedMaterials = originalMaterials.map((material) => {
          const mName = (material && material.name || '').toLowerCase();
          if (!material) return material;

          // GLTF body meshes can contain dozens of material groups. Recolor only
          // the paint group so glass, trim, cabin, lamps, and chrome retain their PBR materials.
          if (material.userData.garagePaint || mName.includes('paint') || (!Array.isArray(obj.material) && bodyObject)) {
            const paintMaterial = material.isMeshPhysicalMaterial && material.userData.garagePaint
              ? material
              : material.clone();
            paintMaterial.name = 'CarPaint';
            paintMaterial.userData.garagePaint = true;
            paintMaterial.userData.garageOwned = true;
            if (material.map && !paintMaterial.userData.garageNeutralPaintMap) {
              paintMaterial.map = this._neutralPaintMap(material.map);
              paintMaterial.userData.garageNeutralPaintMap = true;
            }
            paintMaterial.color.copy(bodyColor).multiplyScalar(0.4);
            Object.assign(paintMaterial, paintProfile);
            paintMaterial.needsUpdate = true;
            return paintMaterial;
          }

          if (mName.includes('glass') || oName.includes('glass')) {
            if (material.userData.garageGlass) return material;
            const glassMaterial = new THREE.MeshPhysicalMaterial({
              name: 'GarageGlass', color: '#0c1320', metalness: 0.2,
              roughness: 0.04, transmission: 0.0, transparent: true,
              opacity: 0.78, clearcoat: 1.0,
            });
            glassMaterial.userData.garageGlass = true;
            glassMaterial.userData.garageOwned = true;
            return glassMaterial;
          }

          if (mName.includes('tyre') || mName.includes('tire') || mName.includes('tread') || mName.includes('sidewall')) {
            if (material.userData.garageTire) return material;
            const tireMaterial = material.clone();
            tireMaterial.color.set('#14171c');
            tireMaterial.roughness = Math.max(0.78, tireMaterial.roughness || 0.82);
            tireMaterial.metalness = 0.04;
            tireMaterial.userData.garageTire = true;
            tireMaterial.userData.garageOwned = true;
            return tireMaterial;
          }

          if (material.userData.garageRim || mName === 'rim' || mName === 'alloy' || oName.startsWith('rim_') || (mName.includes('metal') && oName.includes('wheel'))) {
            const rimMaterial = material.isMeshStandardMaterial && material.userData.garageRim
              ? material
              : new THREE.MeshStandardMaterial({
                name: 'GarageRim', metalness: 0.92, roughness: 0.18,
              });
            rimMaterial.name = 'GarageRim';
            rimMaterial.userData.garageRim = true;
            rimMaterial.userData.garageOwned = true;
            rimMaterial.color.set(rimColor);
            return rimMaterial;
          }
          return material;
        });
        obj.material = Array.isArray(obj.material) ? updatedMaterials : updatedMaterials[0];
      });

      if (this.underglowMesh) {
        const hasNeon = (vm.exhaustNeon || 0) >= 2;
        this.underglowMesh.material.opacity = hasNeon ? 0.85 : 0.0;
        this.underglowMesh.material.color.set(finish === 2 ? '#a855f7' : '#00e5ff');
      }
      this.startLoop();
    },

    _neutralPaintMap(sourceTexture) {
      if (!sourceTexture || !sourceTexture.image || typeof document === 'undefined') return sourceTexture;
      const key = sourceTexture.uuid;
      if (this.paintTextureCache[key]) return this.paintTextureCache[key];
      try {
        const image = sourceTexture.image;
        const width = image.naturalWidth || image.videoWidth || image.width;
        const height = image.naturalHeight || image.videoHeight || image.height;
        if (!width || !height) return sourceTexture;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(image, 0, 0, width, height);
        const pixels = ctx.getImageData(0, 0, width, height);
        for (let i = 0; i < pixels.data.length; i += 4) {
          const gray = Math.round(pixels.data[i] * 0.2126 + pixels.data[i + 1] * 0.7152 + pixels.data[i + 2] * 0.0722);
          pixels.data[i] = gray;
          pixels.data[i + 1] = gray;
          pixels.data[i + 2] = gray;
        }
        ctx.putImageData(pixels, 0, 0);
        const texture = new global.THREE.CanvasTexture(canvas);
        texture.colorSpace = sourceTexture.colorSpace;
        texture.channel = sourceTexture.channel;
        texture.flipY = sourceTexture.flipY;
        texture.wrapS = sourceTexture.wrapS;
        texture.wrapT = sourceTexture.wrapT;
        texture.repeat.copy(sourceTexture.repeat);
        texture.offset.copy(sourceTexture.offset);
        texture.center.copy(sourceTexture.center);
        texture.rotation = sourceTexture.rotation;
        texture.magFilter = sourceTexture.magFilter;
        texture.minFilter = sourceTexture.minFilter;
        texture.generateMipmaps = sourceTexture.generateMipmaps;
        texture.anisotropy = sourceTexture.anisotropy;
        texture.needsUpdate = true;
        this.paintTextureCache[key] = texture;
        return texture;
      } catch (e) {
        return sourceTexture;
      }
    },

    _touchCarScene(carId) {
      const scene = this.glbCache[carId];
      if (!scene) return;
      delete this.glbCache[carId];
      this.glbCache[carId] = scene;
    },

    _disposeCarScene(scene) {
      const geometries = new Set();
      const materials = new Set();
      const textures = new Set();
      scene.traverse((obj) => {
        if (obj.geometry) geometries.add(obj.geometry);
        const list = Array.isArray(obj.material) ? obj.material : [obj.material];
        list.forEach((material) => {
          if (!material || materials.has(material)) return;
          materials.add(material);
          Object.keys(material).forEach((key) => {
            const value = material[key];
            if (value && value.isTexture) {
              textures.add(value);
              const paintTexture = this.paintTextureCache[value.uuid];
              if (paintTexture) {
                delete this.paintTextureCache[value.uuid];
                paintTexture.dispose();
              }
            }
          });
        });
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
    },

    _disposeMountedMaterials(root) {
      if (!root) return;
      const materials = new Set();
      root.traverse((obj) => {
        const list = Array.isArray(obj.material) ? obj.material : [obj.material];
        list.forEach((material) => {
          if (material && material.userData && material.userData.garageOwned) materials.add(material);
        });
      });
      materials.forEach((material) => material.dispose());
    },

    _cacheCarScene(carId, scene) {
      this.glbCache[carId] = scene;
      this._touchCarScene(carId);
      while (Object.keys(this.glbCache).length > this.maxCachedModels) {
        const oldestId = Object.keys(this.glbCache).find((id) => id !== carId && id !== this.curCarId);
        if (!oldestId) break;
        const staleScene = this.glbCache[oldestId];
        delete this.glbCache[oldestId];
        this._disposeCarScene(staleScene);
      }
    },

    updateCar(car) {
      if (!this.isReady || !car) return;
      this.curCar = car;
      const knownCars = ['sahin', 'e30', 'bozkir200', 'ada_roadster', 'jdm', 'e36_sprint', 'samuray_r26', 'v8', 'sehir_ustasi', 'super'];
      const resolveCarId = (id) => {
        const requestedId = String(id || 'sahin');
        return knownCars.includes(requestedId) ? requestedId : 'sahin';
      };
      const carId = resolveCarId(car.id);
      const modelFiles = {
        sahin: 'car_sahin.glb',
        e30: 'car_e30.glb',
        bozkir200: 'car_bozkir200.glb',
        ada_roadster: 'car_ada_roadster.glb',
        jdm: 'car_jdm.glb',
        e36_sprint: 'car_e36_sprint.glb',
        samuray_r26: 'car_samuray_r26.glb',
        v8: 'car_v8.glb',
        sehir_ustasi: 'car_sehir_ustasi.glb',
        super: 'car_super.glb'
      };
      const modelFile = modelFiles[carId] || ('car_' + carId + '.glb');

      if (this.glbCache[carId]) {
        this._touchCarScene(carId);
        if (this.curCarId !== carId) {
          this._mountCarScene(carId, this.glbCache[carId]);
        }
        if (this.carRoot.children[0]) {
          this._applyCarMaterialsAndMods(this.carRoot.children[0], car);
          this._setStatus('ready', carId);
        }
        return;
      }

      if (!this.loader) {
        this._setStatus('model-error', carId);
        return;
      }
      if (this.glbLoading[carId]) {
        this._setStatus('loading', carId);
        return;
      }
      if (this.loader) {
        this.glbLoading[carId] = true;
        this._setStatus('loading', carId);
        const onLoaded = (gltf) => {
          if (!gltf || !gltf.scene) {
            this.glbLoading[carId] = false;
            if (this.curCar && resolveCarId(this.curCar.id) === carId) this._setStatus('model-error', carId);
            return;
          }
          this._cacheCarScene(carId, gltf.scene);
          this.glbLoading[carId] = false;
          if (this.curCar && resolveCarId(this.curCar.id) === carId) {
            this._mountCarScene(carId, gltf.scene);
            this._applyCarMaterialsAndMods(this.carRoot.children[0], this.curCar);
            this._setStatus('ready', carId);
          }
        };
        const onError = () => {
          this.glbLoading[carId] = false;
          if (this.curCar && resolveCarId(this.curCar.id) === carId) this._setStatus('model-error', carId);
        };
        const embeddedModel = global.GARAJ_GLB_B64 && global.GARAJ_GLB_B64[carId];
        if (embeddedModel) {
          try {
            const bin = atob(embeddedModel);
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
            this.loader.parse(bytes.buffer, '', onLoaded, onError);
            return;
          } catch (e) {
            this.glbLoading[carId] = false;
          }
        }
        try {
          this.loader.load('models/' + modelFile, onLoaded, undefined, onError);
        } catch (e) {
          onError();
        }
      }
    },

    _mountCarScene(carId, sceneProto) {
      this.curCarId = carId;
      while (this.carRoot.children.length > 0) {
        const previous = this.carRoot.children[0];
        this._disposeMountedMaterials(previous);
        this.carRoot.remove(previous);
      }
      const clone = sceneProto.clone(true);
      // Vinish.Dev models face +Z. Turn the front toward the showroom camera, then
      // normalize model scale and floor contact so every class fits the same stage.
      clone.rotation.y = Math.PI / 2;
      clone.updateMatrixWorld(true);
      let bounds = new global.THREE.Box3().setFromObject(clone);
      const size = bounds.getSize(new global.THREE.Vector3());
      const length = Math.max(size.x, size.z);
      if (length > 0) clone.scale.setScalar(4.55 / length);
      clone.updateMatrixWorld(true);
      bounds = new global.THREE.Box3().setFromObject(clone);
      const center = bounds.getCenter(new global.THREE.Vector3());
      clone.position.x -= center.x;
      clone.position.z -= center.z;
      clone.position.y -= bounds.min.y;
      this.carRoot.add(clone);
    },

    focusPart(partKey) {
      const presets = {
        default: { theta: 0.72, phi: 1.24, dist: 7.4, look: [0, 0.58, 0], spin: 0 },
        frontBumper: { theta: 0.32, phi: 1.32, dist: 3.3, look: [1.55, 0.34, 0], spin: 0.0 },
        hood: { theta: 0.55, phi: 1.05, dist: 3.4, look: [1.05, 0.78, 0], spin: 0.0 },
        bodyKit: { theta: 1.45, phi: 1.28, dist: 4.3, look: [0, 0.45, 0], spin: 0 },
        rims: { theta: 1.25, phi: 1.36, dist: 2.85, look: [1.15, 0.34, 0.6], spin: 0.0 },
        spoiler: { theta: -2.45, phi: 1.12, dist: 3.35, look: [-1.65, 0.85, 0], spin: 0.0 },
        exhaustNeon: { theta: -2.75, phi: 1.34, dist: 3.3, look: [-1.6, 0.25, 0], spin: 0.0 },
        paintFinish: { theta: 0.82, phi: 1.15, dist: 4.4, look: [0, 0.65, 0], spin: 0 },
      };
      const p = presets[partKey] || presets.default;
      this.targetTheta = p.theta;
      this.targetPhi = p.phi;
      this.targetDist = p.dist;
      this.targetLook.set(p.look[0], p.look[1], p.look[2]);
      this.autoSpinSpeed = p.spin;
      this.startLoop();
    },

    setRev(active) {
      this.isRevving = !!active;
      this.startLoop();
    },

    _bindControls() {
      const c = this.canvas;
      c.style.touchAction = 'none';
      c.addEventListener('pointerdown', (e) => {
        this.pointerDown = true;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.autoSpinSpeed = 0;
        this.startLoop();
      });
      global.addEventListener('pointermove', (e) => {
        if (!this.pointerDown) return;
        const dx = e.clientX - this.lastX;
        const dy = e.clientY - this.lastY;
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.targetTheta -= dx * 0.008;
        this.targetPhi = Math.max(0.65, Math.min(1.44, this.targetPhi - dy * 0.006));
        this.startLoop();
      });
      const releasePointer = () => { this.pointerDown = false; };
      global.addEventListener('pointerup', releasePointer);
      global.addEventListener('pointercancel', releasePointer);
      c.addEventListener('wheel', (e) => {
        e.preventDefault();
        this.targetDist = Math.max(2.6, Math.min(9.0, this.targetDist + e.deltaY * 0.0025));
        this.startLoop();
      }, { passive: false });
    },

    resize() {
      if (!this.renderer || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const w = Math.max(300, rect.width || this.canvas.clientWidth || 640);
      const h = Math.max(180, rect.height || this.canvas.clientHeight || 360);
      this.renderer.setSize(w, h, false);
      this.camera.aspect = w / h;
      if (h <= 600 && w / h >= 1.4) {
        this.camera.setViewOffset(w, h, -w * 0.06, 0, w, h);
      } else {
        this.camera.clearViewOffset();
        this.camera.updateProjectionMatrix();
      }
      this.startLoop();
    },

    _adaptRenderQuality(frameMs, now) {
      if (!this.renderQuality || frameMs <= 0) return;
      const quality = this.renderQuality;
      quality.frameCount += 1;
      quality.frameTimeTotal += frameMs;
      if (quality.frameCount < 15) return;

      const averageFrameMs = quality.frameTimeTotal / quality.frameCount;
      quality.frameCount = 0;
      quality.frameTimeTotal = 0;
      if (now - quality.lastChangeAt < 2500) return;

      let nextPixelRatio = quality.currentPixelRatio;
      if (averageFrameMs > 36 && nextPixelRatio > quality.minPixelRatio) {
        nextPixelRatio = Math.max(quality.minPixelRatio, nextPixelRatio - 0.25);
      } else if (averageFrameMs < 25 && nextPixelRatio < quality.maxPixelRatio) {
        nextPixelRatio = Math.min(quality.maxPixelRatio, nextPixelRatio + 0.125);
      }
      if (nextPixelRatio === quality.currentPixelRatio) return;

      quality.currentPixelRatio = nextPixelRatio;
      quality.lastChangeAt = now;
      this.renderer.setPixelRatio(nextPixelRatio);
    },

    startLoop() {
      if (!this.active || this.rafId) return;

      const tick = (now) => {
        this.rafId = null;
        if (!this.active) return;

        const frameMs = this.lastTime ? now - this.lastTime : 0;
        const dt = Math.min(0.05, frameMs / 1000);
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
            if (this.dynoRollers && this.dynoRollers.length > 0) {
              for (let ri = 0; ri < this.dynoRollers.length; ri++) {
                this.dynoRollers[ri].rotation.x += dt * 22;
              }
            }
          } else {
            this.carRoot.rotation.x *= Math.exp(-10 * dt);
            this.carRoot.position.y = 0.055;
          }
        }

        this.renderer.render(this.scene, this.camera);
        this._adaptRenderQuality(frameMs, now);

        const cameraSettled =
          Math.abs(this.targetTheta - this.orbitTheta) < 0.001 &&
          Math.abs(this.targetPhi - this.orbitPhi) < 0.001 &&
          Math.abs(this.targetDist - this.orbitDist) < 0.001 &&
          this.curLook.distanceToSquared(this.targetLook) < 0.000001;
        const carSettled = !this.carRoot || Math.abs(this.carRoot.rotation.x) < 0.001;
        const shouldContinue =
          this.pointerDown ||
          this.autoSpinSpeed !== 0 ||
          this.isRevving ||
          !cameraSettled ||
          !carSettled;
        if (this.active && shouldContinue) this.rafId = requestAnimationFrame(tick);
      };

      this.rafId = requestAnimationFrame(tick);
    },
  };

  global.Garaj3D = Garaj3D;
})(typeof window !== 'undefined' ? window : globalThis);
