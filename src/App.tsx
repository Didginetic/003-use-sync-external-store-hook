import React, { useEffect, useState, startTransition } from "react";
import { v4 as uuid } from 'uuid'
import './index.scss';
import { Elem, Btns } from './components';
import { IElem } from './interfaces';
import { inject, observer } from 'mobx-react';
import { ColorStore } from './store';
// import { useColorStoreData } from './hooks'

const generateRundomArrOfNumbers = (length: number = 1000) => 
  [...Array(length)].map(() => ({ value: ~~(Math.random() * length), id: uuid() }))

const App: React.FC<{ colorStore?: ColorStore }> = 
  inject('colorStore')
  (observer(({ colorStore }) => {
    const [elements, setElements] = useState<IElem[]>(generateRundomArrOfNumbers)

    useEffect(() => {
      setInterval(() => {
        startTransition(() => setElements(generateRundomArrOfNumbers(1000)))
      }, 200)
    }, [])
  
    return (
      <div className="app">
        <Btns />
        <div style={{ backgroundColor: colorStore?.color }} />
        <div className="container">
          {elements.map(elem => <Elem key={elem.id} {...elem} />)}
        </div>
      </div>
    )
  }))

// const App: React.FC = () => {
//   const [elements, setElements] = useState<IElem[]>(generateRundomArrOfNumbers)
//   const color = useColorStoreData();

//   useEffect(() => {
//     setInterval(() => {
//       startTransition(() => setElements(generateRundomArrOfNumbers(1000)))
//     }, 200)
//   }, [])

//   return (
//     <div className="app">
//       <Btns />
//       <div style={{ backgroundColor: color }} />
//       <div className="container">
//         {elements.map(elem => <Elem key={elem.id} {...elem} />)}
//       </div>
//     </div>
//   )
// }
  
export default App;
