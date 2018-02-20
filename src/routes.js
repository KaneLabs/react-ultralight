import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Hello from './components/Hello';
import World from './components/World';

const Routes = () => (
  <Router>
    <div>
      <Route path='/' component={Nav} />
      <Route path='/' exact component={Hello} />
      <Route path='/world' component={World} />
    </div>
  </Router>
);

export default Routes;
