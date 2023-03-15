import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/LandingPage';
import Dash from './components/dash/Dash';
import Form from './components/form/Form';
import ThanksPage from './components/ThanksPage';
import OrgEntry from './components/ddpo/OrgEntry';
import ManageSubmissions from './components/manageSubmissions/ManageSubmissions';
import Snackbar from './snackbar/Snackbar';
import DDPOStore from './components/ddpo/DDPOStore';

function App() {
  React.useEffect(() => {
    DDPOStore.loadDdpos();
  }, []);
  return (
    <Router>
      <Navbar />
      <Snackbar />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/form' element={<Form />} />
        <Route path='/ddpo' element={<OrgEntry />} />
        <Route path='/thankyou' element={<ThanksPage />} />
        <Route path='/submissions' element={<ManageSubmissions />} />
      </Routes>
    </Router>
  );
}

export default App;
