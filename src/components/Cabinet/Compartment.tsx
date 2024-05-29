import { IFaceData } from '../../types';
import CompartmentFace from './CompartmentFace';
import { IPropsCompartment } from './types';

const Compartment = (props: IPropsCompartment) => {
  const {
    compartmentDepth,
    compartmentHeight,
    compartmentWidth,
    wallsColor,
    cubePosition = [0, 0, 0],
    frontColor,
  } = props;

  const faceWidth = 0.2;
  const initialPosition = 1;
  const getXValOfRightFace = () => {
    switch (compartmentWidth) {
      case 1:
        return initialPosition;
      case 2:
        return compartmentWidth * (initialPosition + 0.5);
      case 3:
        return (
          compartmentWidth * (initialPosition + 0.5) +
          compartmentWidth * faceWidth
        );
      case 4:
        return (
          compartmentWidth * (initialPosition + 0.5) +
          compartmentWidth * faceWidth +
          0.5
        );
      default:
        return initialPosition;
    }
  };
  const allFacesData: IFaceData[] = [
    {
      placeMent: 'bottom',
      color: wallsColor,
      position: [initialPosition, initialPosition, initialPosition],
      rotation: [0, 0, 0],
    },
    {
      placeMent: 'right',
      color: wallsColor,
      position: [getXValOfRightFace(), initialPosition, initialPosition],
      rotation: [0, 0, Math.PI / 2],
    },
    {
      placeMent: 'left',
      color: wallsColor,
      position: [initialPosition, initialPosition, initialPosition],
      rotation: [0, 0, -Math.PI / 2],
    },
    {
      placeMent: 'back',
      color: frontColor,
      position: [initialPosition, initialPosition, initialPosition],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      placeMent: 'front',
      color: 'darkgray',
      position: [initialPosition, initialPosition, 3 - 0.2],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      placeMent: 'top',
      color: wallsColor,
      position: [initialPosition, initialPosition, initialPosition],
      rotation: [Math.PI, 0, 0],
    },
  ];

  return (
    <group dispose={null} position={cubePosition}>
      {allFacesData.map((faceData, idx) => (
        <CompartmentFace
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

export default Compartment;
