import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'mobx-react';
import { colorStore } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider colorStore={colorStore}>
      <App />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>
);