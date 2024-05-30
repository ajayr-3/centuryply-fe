import { OrbitControls } from "@react-three/drei";
import Compartment from "./Compartment";
import { IPropsCabinetCanvas } from "./types";
const CabinetCanvas = (props: IPropsCabinetCanvas) => {
  const {
    zoom,
    rows,
    columns,
    height,
    width,
    depth,
    frontColor,
    wallsColor,
    frontDoorTextureUrl,
    wallsTextureUrl,
  } = props;

  return (
    // <group position={[-2, -8, 0]} scale={1}>
    <group
      // position={[-2, -8, -10]}
      position={[-1, -2, 0]}
      scale={1}
      // rotation={[-Math.PI / 9, Math.PI / 16, 0]}
    >
      <ambientLight />
      <group scale={zoom}>
        {[...new Array(rows)].map((_, idx) =>
          [...new Array(columns)].map((__, colIdx) => (
            <Compartment
              key={`${idx}-${colIdx}`}
              cubePosition={[2 * colIdx * width, 2 * idx * height, 0]}
              compartmentHeight={height}
              compartmentWidth={width}
              compartmentDepth={depth}
              frontColor={frontColor}
              wallsColor={wallsColor}
              frontDoorTextureUrl={frontDoorTextureUrl}
              wallsTextureUrl={wallsTextureUrl}
            />
          )),
        )}
      </group>
      <OrbitControls
        position={[0, 10, 0]}
        enablePan
        enableDamping
        enableZoom={true}
        enableRotate={true}
      />
      <directionalLight position={[0, 100, 0]} color="yellow" intensity={0.5} />
    </group>
  );
};

export default CabinetCanvas;
