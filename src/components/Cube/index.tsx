import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Cube from './Cube';

function CubeCanvas() {
  const canvasRef = useRef(null);

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='product-canvas'>
          <Canvas ref={canvasRef}>
            <Suspense fallback={null}>
              <ambientLight />
              <Cube />
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

export default CubeCanvas;
