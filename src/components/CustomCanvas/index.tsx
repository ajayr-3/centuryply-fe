import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';

function CustomCanvas() {
  const canvasRef = useRef(null);

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='product-canvas'>
          <Canvas ref={canvasRef}>
            <Suspense fallback={null}>
              <ambientLight />
              <Model />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <OrbitControls enablePan enableZoom enableRotate={!false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default CustomCanvas;
