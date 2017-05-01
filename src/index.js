// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Routes from './routes';

import './index.scss';

let store = createStore(todoApp)
ReactDOM.render(
  <Provider store={store}>
  <Routes/>
  </Provider>,
  document.getElementById('root')
);
