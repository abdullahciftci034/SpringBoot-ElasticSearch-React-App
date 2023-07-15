import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Fakes from './Fakes';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fakes" component={Fakes} />
      </Switch>
    </Router>   
  )
}