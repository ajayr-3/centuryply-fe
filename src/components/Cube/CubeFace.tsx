import { useGLTF } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';

const CubeFace = ({
  color,
  position,
  rotation,
}: {
  color?: string;
  position?: Vector3;
  rotation?: Euler;
}) => {
  const { nodes, materials } = useGLTF('CubeFace/CubeFace-transformed.glb');

  return (
    <mesh
      geometry={nodes.Cube.geometry}
      material={materials.Material}
      position={position}
      scale={1.5}
      rotation={rotation}
      material-color={color}>
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

export default CubeFace;
