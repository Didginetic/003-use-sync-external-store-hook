import { ColorStore } from '../store';

export interface IElem {
  value: number;
  id: string;
}

export interface IElemProps extends IElem {
  colorStore?: ColorStore;
}