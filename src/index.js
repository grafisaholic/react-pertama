import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import './main.css'
import App from './App'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'))