import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import './main.css'
import App from './App'

const history = createBrowserHistory();

ReactDom.render(
<Router history={history}>
  <App />
</Router>
, document.getElementById('root'))