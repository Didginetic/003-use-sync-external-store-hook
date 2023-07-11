import { makeAutoObservable } from 'mobx';

export enum Color {
  gray = '#D8D8D8',
  blue = '#58ACFA',
  red = '#FE775A'
}

export class ColorStore {
  color = Color.gray

  constructor() {
    makeAutoObservable(this);
  }

  setColor(color: Color) {
    this.color = color;
  }
}

// export class ColorStore {
//   color = Color.gray;
//   subscribers = new Set<() => void>();

//   setColor(color: Color) {
//     this.color = color;
//     this.subscribers.forEach(sbr => sbr());
//   }

//   subscribe(sbr: () => void) {
//     this.subscribers.add(sbr);
//   }

//   unsubscribe(sbr: () => void) {
//     this.subscribers.delete(sbr);
//   }
// }

export const colorStore = new ColorStore()