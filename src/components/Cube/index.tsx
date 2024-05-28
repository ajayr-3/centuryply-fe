import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Cube from './Cube';

const CubeCanvas = () => {
  const canvasRef = useRef(null);

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='product-canvas'>
          <Canvas ref={canvasRef}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <Cube />
              <spotLight position={[50, 50, -30]} castShadow />
              <pointLight
                position={[-10, -10, -10]}
                color='red'
                intensity={3}
              />
              <pointLight position={[0, -5, 5]} intensity={0.5} />
              <directionalLight
                position={[0, 1000, 0]}
                color='red'
                intensity={2}
              />
              {/* <Environment preset='warehouse' /> */}
              <OrbitControls enablePan enableZoom enableRotate={!false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default CubeCanvas;
