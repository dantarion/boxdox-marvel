// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

import './index.scss'
import 'font-awesome/css/font-awesome.css'
// export for others scripts to use
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass/assets/javascripts/bootstrap')

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
)
