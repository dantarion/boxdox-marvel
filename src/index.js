// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'
import './index.scss'
import 'font-awesome/css/font-awesome.css'
// export for others scripts to use
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass/assets/javascripts/bootstrap')

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
)
