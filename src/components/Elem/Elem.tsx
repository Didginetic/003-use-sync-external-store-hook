import { inject, observer } from 'mobx-react';
import React from 'react';
import { IElemProps, IElem } from '../../interfaces';
import '../../index.scss';
import { useColorStoreData } from '../../hooks';

export const Elem: React.FC<IElemProps> = 
  inject('colorStore')
  (observer(({ value, colorStore }) => {
    return <div className="elem" style={{ backgroundColor: colorStore?.color }} >{value}</div>
  }))

// export const Elem: React.FC<IElem> = ({ value }) => {
//   const color = useColorStoreData();
//   return <div className="elem" style={{ backgroundColor: color }} >{value}</div>
// }