import { Euler, Vector3 } from '@react-three/fiber';
import CubeFace from './CubeFace';

const Cube = ({
  cubePosition,
  compartmentHeight,
  compartmentWidth,
  compartmentDepth,
  frontColor,
  wallsColor,
}: {
  cubePosition?: Vector3;
  compartmentHeight: number;
  compartmentWidth: number;
  compartmentDepth: number;
  frontColor: string;
  wallsColor: string;
}) => {
  if (!cubePosition) {
    cubePosition = [0, 0, 0];
  }

  const allFacesData: {
    placeMent: string;
    color: string;
    position: Vector3;
    rotation: Euler;
  }[] = [
    {
      placeMent: 'front',
      color: frontColor,
      position: [0, 1, 2],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      placeMent: 'back',
      color: 'darkgray',
      position: [0, 1, -0.2],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      placeMent: 'bottom',
      color: wallsColor,
      position: [0, 1, 0],
      rotation: [0, Math.PI / 2, 0],
    },
    {
      placeMent: 'top',
      color: wallsColor,
      position: [0, 1, 0],
      rotation: [Math.PI, 0, 0],
    },
    {
      placeMent: 'right',
      color: wallsColor,
      position: [0, 1, 0],
      rotation: [0, 0, Math.PI / 2],
    },
    {
      placeMent: 'left',
      color: wallsColor,
      position: [0, 1, 0],
      rotation: [0, 0, -Math.PI / 2],
    },
  ];

  return (
    <group
      dispose={null}
      position={cubePosition}
      scale={[compartmentWidth, compartmentHeight, compartmentDepth]}>
      {allFacesData.map((faceData, idx) => (
        <CubeFace
          key={idx}
          color={faceData.color}
          position={faceData.position}
          rotation={faceData.rotation}
          placeMent={faceData.placeMent}
          compartmentHeight={compartmentHeight}
          compartmentWidth={compartmentWidth}
          compartmentDepth={compartmentDepth}
        />
      ))}
    </group>
  );
};
export default Cube;
