import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/constructForm/Form';
import ThanksPage from './components/ThanksPage';
import OrgEntry from './components/ddpo/OrgEntry';
import Snackbar from './snackbar/Snackbar';
import DDPOStore from './components/ddpo/DDPOStore';

function App() {
  React.useEffect(() => {
    DDPOStore.loadDdpos();
  }, [])
  return (
    <Router>
      <Navbar />
      <Snackbar />
      <Switch>
        <Route exact path='/'>
          <Form />
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
};

export default App;
