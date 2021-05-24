import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/LandingPage';
import Dash from './components/dash/Dash';
import Form from './components/form/Form';
import ThanksPage from './components/ThanksPage';
import OrgEntry from './components/ddpo/OrgEntry';
import Snackbar from './snackbar/Snackbar';
import DDPOStore from './components/ddpo/DDPOStore';
import BottomNavigation from './components/accessible-components/BottomNavigation';

const useStyles = makeStyles({
  main: {
    marginTop: '20px',
  },
});

function App() {
  const classes = useStyles();

  React.useEffect(() => {
    DDPOStore.loadDdpos();
  }, []);

  return (
    <Router>
      <Navbar />
      <main className={classes.main}>
        <Snackbar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/dash'>
            <Dash />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
          <Route path='/ddpo'>
            <OrgEntry />
          </Route>
          <Route path='/thankyou'>
            <ThanksPage />
          </Route>
        </Switch>
      </main>
      <BottomNavigation />
    </Router>
  );
}

export default App;
