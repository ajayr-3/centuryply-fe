import { useGLTF, useTexture } from '@react-three/drei';
import { IPropsCompartmentFace } from './types';
import { GLTFResult } from '../../module';
import { useLayoutEffect, useState } from 'react';
import { IFaceData } from '../../types';

const CompartmentFace = (props: IPropsCompartmentFace) => {
  const {
    compartmentDepth,
    compartmentHeight,
    compartmentWidth,
    color,
    placeMent,
    position,
    rotation,
  } = props;
  const { nodes, materials } = useGLTF(
    'CubeFace2/CubeFace2.gltf'
  ) as GLTFResult;

  const whiteWoodTexture = useTexture('WhiteWood2.jpg');
  const brownWoodTexture = useTexture('BrownWood.jpg');

  const [faceScaleVal, setFaceScaleVal] = useState<IFaceData['position']>([
    compartmentWidth,
    compartmentHeight,
    compartmentDepth,
  ]);

  useLayoutEffect(() => {
    const newScaleVal = [compartmentWidth, compartmentHeight, compartmentDepth];
    switch (placeMent) {
      case 'back':
      case 'front':
        newScaleVal[2] = Math.min(1, newScaleVal[2]);
        break;
      case 'bottom':
      case 'top':
        newScaleVal[1] = Math.min(1, newScaleVal[1]);
        break;

      case 'left':
      case 'right':
        newScaleVal[0] = Math.min(1, newScaleVal[0]);
        break;
    }
    setFaceScaleVal(newScaleVal as IFaceData['position']);
  }, [compartmentDepth, compartmentHeight, compartmentWidth, placeMent]);

  return (
    <group scale={faceScaleVal}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={position}
        rotation={rotation}
        scale={(() => (placeMent === 'front' ? 0.8 : 1))()}
        castShadow
        material-color={color}>
        {placeMent === 'front' ? (
          <meshStandardMaterial map={whiteWoodTexture} />
        ) : (
          <meshStandardMaterial map={brownWoodTexture} />
        )}
      </mesh>
    </group>
  );
};

export default CompartmentFace;
