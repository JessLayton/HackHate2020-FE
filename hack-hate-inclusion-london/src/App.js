import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing';
import ThanksPage from './components/ThanksPage';
import OrgEntry from './components/OrgEntry';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/ddpo'>
          <OrgEntry />
        </Route>
        <Route path='/thankyou'>
          <ThanksPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
