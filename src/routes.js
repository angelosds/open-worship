import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import MainLayout from './layouts/main';

const Routes = () => (
  <Router>
    <Route path="/">
      <Redirect from="/" to="/app" />
    </Route>
    <Route path="/app" component={MainLayout} />
  </Router>
);

export default Routes;
