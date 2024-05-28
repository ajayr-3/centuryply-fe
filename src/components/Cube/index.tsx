import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import Cube from './Cube';

const CubeCanvas = () => {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState<number>(0.4);
  const [rows, setRows] = useState<number>(2);
  const [columns, setColumns] = useState<number>(3);
  const [height, setHeight] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);
  const [depth, setDepth] = useState<number>(1);
  const [frontColor, setFrontColor] = useState<string>('#966F33');
  const [wallsColor, setWallsColor] = useState<string>('lightgray');

  const isDimensionBugFixed = false;

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='product-canvas'>
          <Canvas ref={canvasRef} className='canvas'>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <group
                scale={zoom}
                position={[-1, -2, 0]}
                rotation={[-Math.PI / 50, Math.PI / 20, 0]}>
                {[...new Array(rows)].map((_, idx) =>
                  [...new Array(columns)].map((__, colIdx) => (
                    <Cube
                      key={`${idx}-${colIdx}`}
                      cubePosition={[2 * colIdx, 2 * idx, 0]}
                      compartmentHeight={height}
                      compartmentWidth={width}
                      compartmentDepth={depth}
                      frontColor={frontColor}
                      wallsColor={wallsColor}
                    />
                  ))
                )}
              </group>
              <spotLight position={[50, 50, -30]} castShadow />
              {/* <pointLight
                position={[-10, -10, -10]}
                color='red'
                intensity={3}
              /> */}
              {/* <pointLight position={[0, -5, 5]} intensity={0.5} /> */}
              {/* <directionalLight
                position={[0, 1000, 0]}
                color='red'
                intensity={2}
              /> */}
              <OrbitControls
                position={[0, 0, 0]}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className='controls-container'>
        <div className='input-group'>
          <label htmlFor='zoom'>Set Zoom :- </label>
          <input
            type='range'
            name='zoom'
            value={zoom}
            max={1}
            step={0.1}
            min={0.1}
            onChange={(e) => setZoom(+e.target.value)}
          />
          {zoom}
        </div>
        <div className='input-group'>
          <label htmlFor='rows'>Total Rows :- </label>
          <input
            type='range'
            name='rows'
            value={rows}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setRows(+e.target.value)}
          />
          {rows}
        </div>
        <div className='input-group'>
          <label htmlFor='columns'>Total Columns :- </label>
          <input
            type='range'
            name='columns'
            value={columns}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setColumns(+e.target.value)}
          />
          {columns}
        </div>

        <div className='input-group'>
          <label htmlFor='height'>Height of each compartment :- </label>
          <input
            type='range'
            name='height'
            value={height}
            max={10}
            step={1}
            min={1}
            disabled={!isDimensionBugFixed}
            onChange={(e) => setHeight(+e.target.value)}
          />
          {height}
        </div>

        <div className='input-group'>
          <label htmlFor='width'>Width of each compartment :- </label>
          <input
            type='range'
            name='width'
            value={width}
            max={10}
            step={1}
            min={1}
            disabled={!isDimensionBugFixed}
            onChange={(e) => setWidth(+e.target.value)}
          />
          {width}
        </div>

        <div className='input-group'>
          <label htmlFor='depth'>Depth of each compartment :- </label>
          <input
            type='range'
            name='depth'
            value={depth}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setDepth(+e.target.value)}
          />
          {depth}
        </div>

        <div className='input-group'>
          <label htmlFor='frontColor'>Front Door Color :- </label>
          <input
            type='color'
            name='frontColor'
            value={frontColor}
            onChange={(e) => setFrontColor(e.target.value)}
          />
          {frontColor}
        </div>
        <div className='input-group'>
          <label htmlFor='wallsColor'>Side Walls Color :- </label>
          <input
            type='color'
            name='wallsColor'
            value={wallsColor}
            onChange={(e) => setWallsColor(e.target.value)}
          />
          {wallsColor}
        </div>
      </div>
    </div>
  );
};

export default CubeCanvas;
