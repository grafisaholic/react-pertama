import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from './Component/learn-1/Navbar';
import day1 from './Views/day1';
import day2 from './Views/day2';
import day3 from './Views/day3';
import day4 from './Views/day4';
import day5 from './Views/day5';
import day6 from './Views/day6';

function App() {

  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/day-1' component={day1} />
        <Route path="/day-2" component={day2} />
        <Route path="/day-3" component={day3} />
        <Route path="/day-4" component={day4} />
        <Route path="/day-5" component={day5} />
        <Route path="/day-6" component={day6} />
        <Redirect from='/' to="/day-1" />
      </Switch>
    </main>
  );
};

export default App