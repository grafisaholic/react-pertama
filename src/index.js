import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import './main.css'
import App from './App'
import Login from './Views/Login'


const history = createBrowserHistory();

ReactDom.render(
<Router history={history}>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </Switch>
</Router>
, document.getElementById('root'))