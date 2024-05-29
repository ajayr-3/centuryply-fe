import { Vector3 } from '@react-three/fiber';
import { Dispatch, SetStateAction } from 'react';
import { IFaceData } from '../../types';
export interface IPropsControls {
  zoom: number;
  setZoom: Dispatch<SetStateAction<number>>;
  rows: number;
  setRows: Dispatch<SetStateAction<number>>;
  columns: number;
  setColumns: Dispatch<SetStateAction<number>>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  depth: number;
  setDepth: Dispatch<SetStateAction<number>>;
  frontColor: string;
  setFrontColor: Dispatch<SetStateAction<string>>;
  wallsColor: string;
  setWallsColor: Dispatch<SetStateAction<string>>;
}

export interface IPropsCabinetCanvas {
  zoom: number;
  rows: number;
  columns: number;
  height: number;
  width: number;
  depth: number;
  frontColor: string;
  wallsColor: string;
}
export interface IPropsCompartment {
  cubePosition?: Vector3;
  compartmentHeight: number;
  compartmentWidth: number;
  compartmentDepth: number;
  frontColor: string;
  wallsColor: string;
}

export interface IPropsCompartmentFace {
  color?: IFaceData['color'];
  position?: IFaceData['position'];
  rotation?: IFaceData['rotation'];
  placeMent?: IFaceData['placeMent'];
  compartmentHeight: number;
  compartmentWidth: number;
  compartmentDepth: number;
}
