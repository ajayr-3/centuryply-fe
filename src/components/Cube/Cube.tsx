import { Euler, Vector3 } from '@react-three/fiber';
import CubeFace from './CubeFace';

const Cube = () => {
  const colors = [
    'darkgray', // back
    'lightgray', // lower
    'lightgray', //top
    'lightgray', //right
    'lightgray', // left
  ];
  const positions: Vector3[] = [
    [0, 1, -0.3],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];
  const rotations: Euler[] = [
    [Math.PI / 2, 0, 0], //back
    [0, Math.PI / 2, 0], //lower
    [Math.PI, 0, 0], // top
    [0, 0, Math.PI / 2], // right
    [0, 0, -Math.PI / 2], // left
  ];
  return (
    <group
      dispose={null}
      scale={0.4}
      rotation={[-Math.PI / 50, Math.PI / 20, 0]}>
      {colors.map((_, index) => (
        <CubeFace
          key={index}
          color={colors[index]}
          position={positions[index]}
          rotation={rotations[index]}
        />
      ))}
    </group>
  );
};
export default Cube;
