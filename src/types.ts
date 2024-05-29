import { Euler, Vector3 } from '@react-three/fiber';

export interface IFaceData {
  placeMent: 'bottom' | 'right' | 'left' | 'top' | 'front' | 'back' | 'test';
  color: string;
  position: Vector3;
  rotation: Euler;
}
