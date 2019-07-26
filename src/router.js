import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Sort from './pages/Sort';
import Cart from './pages/Cart';

export default () => (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/sort" component={Sort} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
)