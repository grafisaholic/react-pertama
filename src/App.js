import React, {Component, useState} from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from './Component/learn-1/Navbar';
import day1 from './Views/day1/index';
import day2 from './Views/day2/index';
import day3 from './Views/day3/index';
import day4 from './Views/day4/index';
import day5 from './Views/day5/index';
import Login from './Views/Login';

function App() {
  const [token, setToken] = useState()

  // if (!token)
  //   return <Login setToken={setToken} />

  return (
    <main>
      <Navbar />

      <Switch>
        <Route path='/day-1' component={day1} />
        <Route path="/day-2" component={day2} />
        <Route path="/day-3" component={day3} />
        <Route path="/day-4" component={day4} />
        <Route path="/day-5" component={day5} />
        <Redirect from='/' to="/day-1" />
      </Switch>
    </main>
  );
};

export default App