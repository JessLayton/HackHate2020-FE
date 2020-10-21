import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Navbar/>
    <Switch>
  <Route exact path="/">{Landing}</Route>
    </Switch>
    </Router>
  );
}

export default App;
