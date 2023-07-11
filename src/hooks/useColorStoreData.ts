import { useMemo, useSyncExternalStore } from 'react';
import { colorStore } from '../store';

export const useColorStoreData = () => {
  // const getColor = () => colorStore.color;
  // const subscribe = useMemo(() => {
  //     return (sbr: () => void) => {
  //       colorStore.subscribe(sbr);
  //         return () => {
  //           colorStore.unsubscribe(sbr);
  //         };
  //     }
  // }, []);
  // return useSyncExternalStore(subscribe, getColor);
}