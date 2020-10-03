import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducers.js';
import App from './App.js';
import './assets/styles/styles.styl';
import * as serviceWorker from './serviceWorker';
import FetchData from './services/FetchData'

const characters = []

const store = createStore(reducer, characters)

ReactDOM.render(

  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
