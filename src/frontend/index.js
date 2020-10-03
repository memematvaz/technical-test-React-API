import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './assets/styles/styles.styl';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
