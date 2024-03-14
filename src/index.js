import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

// import { App } from './App-store-basic-logic';
// import { store } from 'store-basic-logic/store-basic-logic';

import { App } from './App-store-with-folders';
import { store } from 'store-with-folders/store-with-folders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
