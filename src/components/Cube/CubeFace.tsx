import { useGLTF } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber';
import { useLayoutEffect, useState } from 'react';

const CubeFace = ({
  color,
  position,
  rotation,
  placeMent,
  compartmentHeight,
  compartmentWidth,
  compartmentDepth,
}: {
  color?: string;
  position?: Vector3;
  rotation?: Euler;
  placeMent?: string;
  compartmentHeight: number;
  compartmentWidth: number;
  compartmentDepth: number;
}) => {
  const { nodes, materials } = useGLTF('CubeFace/CubeFace-transformed.glb');
  return (
    <mesh
      geometry={nodes.Cube.geometry}
      material={materials.Material}
      position={position}
      rotation={rotation}
      // scale={1}
      scale={(() => (placeMent === 'front' ? 0.8 : 1))()}
      material-color={color}>
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
};

export default CubeFace;
