import { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  GLTFLoader,
  OrbitControls,
  RGBELoader,
  WebGL,
} from 'three/examples/jsm/Addons.js';
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';
import WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer.js';

const Chair3d = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isSceneLoaded = useRef<boolean>(false);
  const initThreeJs = useCallback(() => {
    const container = divRef.current;
    if (container && !isSceneLoaded.current) {
      if (
        WebGPU.isAvailable() === false &&
        WebGL.isWebGL2Available() === false
      ) {
        document.body.appendChild(WebGPU.getErrorMessage());
        throw new Error('No WebGPU or WebGL2 support');
      }

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        20
      );
      camera.position.set(-0.75, 0.7, 1.25);

      const scene = new THREE.Scene();
      scene.add(new THREE.DirectionalLight(0xffffff, 2));

      new GLTFLoader().setPath('').load('SheenChair.glb', (gltf) => {
        scene.add(gltf.scene);
        const gui = new GUI();
        gui.hide();
        gui.open();
      });

      const renderer = new WebGPURenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(() => {
        controls.update(); // required if damping enabled
        renderer.render(scene, camera);
      });
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      container.appendChild(renderer.domElement);

      scene.background = new THREE.Color(0xaaaaaa);

      new RGBELoader()
        .setPath('')
        .load('royal_esplanade_1k.hdr', function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.background = texture;
          scene.backgroundBlurriness = 1;
          scene.environment = texture;
        });

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.minDistance = 1;
      controls.maxDistance = 10;
      controls.target.set(0, 0.35, 0);
      controls.update();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      });
      isSceneLoaded.current = true;
      return () => {
        isSceneLoaded.current = false;
        container.removeChild(renderer.domElement);
      };
    }
  }, []);

  useEffect(() => {
    initThreeJs();
  }, [initThreeJs]);

  return (
    <div
      ref={divRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Chair3d;
