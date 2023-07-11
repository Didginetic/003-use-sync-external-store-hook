import { inject, observer } from 'mobx-react';
import React from "react";
import { ColorStore, Color, colorStore } from '../../store';

export const Btns: React.FC<{ colorStore?: ColorStore }> =
  inject('colorStore')
  (observer(({ colorStore }) => {

    const btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      colorStore?.setColor((e.target as HTMLInputElement).value as Color)
    }

    return <div>
      <button value={Color.blue} onClick={btnClickHandler}>Blue</button>
      <button value={Color.red} onClick={btnClickHandler}>Red</button>
    </div>
  }))

// export const Btns: React.FC = () => {

//   const btnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
//     colorStore.setColor((e.target as HTMLInputElement).value as Color)
//   }

//   return <div>
//       <button value={Color.blue} onClick={btnClickHandler}>Blue</button>
//       <button value={Color.red} onClick={btnClickHandler}>Red</button>
//     </div>
// }