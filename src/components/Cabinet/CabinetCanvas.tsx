import { OrbitControls } from '@react-three/drei';
import Compartment from './Compartment';
import { IPropsCabinetCanvas } from './types';
const CabinetCanvas = (props: IPropsCabinetCanvas) => {
  const { zoom, rows, columns, height, width, depth, frontColor, wallsColor } =
    props;

  return (
    <group position={[-2, 0, 0]}>
      <axesHelper scale={20} />
      <arrowHelper scale={2} />
      <ambientLight />
      <group scale={zoom}>
        {[...new Array(rows)].map((_, idx) =>
          [...new Array(columns)].map((__, colIdx) => (
            <Compartment
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
      <OrbitControls
        position={[0, 10, 0]}
        enableZoom={true}
        enableRotate={true}
      />
      <directionalLight position={[0, 100, 0]} color='yellow' intensity={0.5} />
    </group>
  );
};

export default CabinetCanvas;
