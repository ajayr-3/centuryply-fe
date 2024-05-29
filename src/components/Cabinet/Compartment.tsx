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
    frontDoorTextureUrl,
    wallsTextureUrl,
  } = props;

  const faceB = 0.2;
  const faceL = 0.5;
  const initialPosition = 1;
  const getXValOfRightFace = (dim: number, isFront?: boolean) => {
    let ans = initialPosition;
    switch (dim) {
      case 1:
        ans = initialPosition;
        break;
      case 2:
        ans = dim * (initialPosition + faceL);
        break;
      case 3:
        ans = dim * (initialPosition + faceL) + dim * faceB;
        break;
      case 4:
        ans = dim * (initialPosition + faceL) + dim * faceB + 0.2;
        break;
      case 5:
        ans = dim * (initialPosition + faceL) + dim * faceB + faceL;
        break;
      case 6:
        ans = dim * (initialPosition + faceL) + dim * faceB + faceL + faceL;
        break;
      case 7:
        ans =
          dim * (initialPosition + faceL) + dim * faceB + faceB + faceL + faceL;
        break;
      case 8:
        ans =
          dim * (initialPosition + faceL) +
          dim * faceB +
          faceB +
          faceL +
          faceL +
          faceB;
        break;
      case 9:
        ans =
          dim * (initialPosition + faceL) +
          dim * faceB +
          faceB +
          faceL +
          faceL +
          faceL +
          faceB;
        break;
      case 10:
      default:
        ans =
          dim * (initialPosition + faceL) +
          dim * faceB +
          faceB +
          faceL +
          faceL +
          faceL +
          faceB +
          faceB;
        break;
    }

    return isFront ? ans + 2 : ans;
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
      position: [
        getXValOfRightFace(compartmentWidth),
        initialPosition,
        initialPosition,
      ],
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
      position: [
        initialPosition,
        initialPosition,
        getXValOfRightFace(compartmentDepth, true),
      ],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      placeMent: 'top',
      color: wallsColor,
      position: [
        initialPosition,
        getXValOfRightFace(compartmentHeight),
        initialPosition,
      ],
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
          frontDoorTextureUrl={frontDoorTextureUrl}
          wallsTextureUrl={wallsTextureUrl}
        />
      ))}
    </group>
  );
};

export default Compartment;
