declare module '*.gltf';

declare module '*.glb' {
  const content: string;
  export default content;
}

export type GLTFResult = GLTF & {
  nodes: {
    CubeFaceMesh: Mesh;
  };
  materials: {
    Material: THREE.Material;
  };
};
