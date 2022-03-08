import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import routes from './data/router';

import Navbar from './Component/learn-1/Navbar';


function App() {

  return (
    <main>
      <Navbar router={routes} />
      <Switch>
        {
          routes.map((r) => (
            <Route key={r.path} path={r.path} component={r.component} />
          ))
        }
        <Redirect from='/' to="/day-1" />
      </Switch>
    </main>
  );
};

export default App