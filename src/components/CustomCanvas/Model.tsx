import { Euler, Vector3 } from '@react-three/fiber';
import CubeFace from './CubeFace';

const Model = () => {
  const colors = [
    'red', // back
    'green', // lower
    'yellow', //top
    'lightgreen', //right
    'gray', // left
  ];
  const positions: Vector3[] = [
    [0, 1, 0],
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
  return colors.map((_, index) => (
    <CubeFace
      key={index}
      color={colors[index]}
      position={positions[index]}
      rotation={rotations[index]}
    />
  ));
};
export default Model;
