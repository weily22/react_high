import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tabbar from './component/tabbar';
import Home from './pages/Home';
import User from './pages/User';
import Sort from './pages/Sort';
import Cart from './pages/Cart';

export default () => (
    <Router>
      <Switch>
        <Route path="/home" component={Tabbar(Home)} />
        <Route path="/user" component={Tabbar(User)} />
        <Route path="/sort" component={Tabbar(Sort)} />
        <Route path="/cart" component={Tabbar(Cart)} />
      </Switch>
    </Router>
)