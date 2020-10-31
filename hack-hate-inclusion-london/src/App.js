import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing';
import OrgEntry from './components/OrgEntry';
import Snackbar from './snackbar/Snackbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Snackbar />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/ddpo'>
          <OrgEntry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
