import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import CabinetCanvas from './CabinetCanvas';
import Controls from './Controls';

const Cabinet = () => {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState<number>(0.4);
  const [rows, setRows] = useState<number>(3);
  const [columns, setColumns] = useState<number>(3);
  const [height, setHeight] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);
  const [depth, setDepth] = useState<number>(1);
  const [frontColor, setFrontColor] = useState<string>('#966F33');
  const [wallsColor, setWallsColor] = useState<string>('lightgray');

  const [frontDoorTextureUrl, setFrontDoorTextureUrl] = useState<string>('');
  const [wallsTextureUrl, setWallsTextureUrl] = useState<string>('');

  return (
    <div className='wrapper'>
      <div className='card'>
        <div className='product-canvas'>
          <Canvas
            ref={canvasRef}
            className='canvas'
            camera={{ position: [-5, 5, 10] }}>
            <Suspense fallback={null}>
              <CabinetCanvas
                zoom={zoom}
                rows={rows}
                columns={columns}
                height={height}
                width={width}
                depth={depth}
                frontColor={frontColor}
                wallsColor={wallsColor}
                frontDoorTextureUrl={frontDoorTextureUrl}
                wallsTextureUrl={wallsTextureUrl}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <Controls
        zoom={zoom}
        rows={rows}
        columns={columns}
        height={height}
        width={width}
        depth={depth}
        setZoom={setZoom}
        setRows={setRows}
        setColumns={setColumns}
        setHeight={setHeight}
        setWidth={setWidth}
        setDepth={setDepth}
        setFrontColor={setFrontColor}
        setWallsColor={setWallsColor}
        frontColor={frontColor}
        wallsColor={wallsColor}
        frontDoorTextureUrl={frontDoorTextureUrl}
        wallsTextureUrl={wallsTextureUrl}
        setFrontDoorTextureUrl={setFrontDoorTextureUrl}
        setWallsTextureUrl={setWallsTextureUrl}
      />
    </div>
  );
};

export default Cabinet;
