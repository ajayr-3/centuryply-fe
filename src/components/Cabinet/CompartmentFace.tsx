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
    frontDoorTextureUrl,
    wallsTextureUrl,
  } = props;
  const { nodes, materials } = useGLTF(
    'CubeFace2/CubeFace2.gltf'
  ) as GLTFResult;
  const frontDoorTexture = useTexture(frontDoorTextureUrl || 'WhiteWood2.jpg');
  const wallsTexture = useTexture(wallsTextureUrl || 'BrownWood.jpg');
  const brownWoodTexture2 = useTexture('wood.jpg');

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
        scale={(() => (placeMent === 'front' ? 0.9 : 1))()}
        castShadow
        material-color={color}>
        {placeMent === 'front' ? (
          <meshStandardMaterial map={frontDoorTexture} />
        ) : placeMent === 'back' ? (
          <meshStandardMaterial map={brownWoodTexture2} />
        ) : (
          <meshStandardMaterial map={wallsTexture} />
        )}
      </mesh>
    </group>
  );
};

export default CompartmentFace;
