import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeChanger from './theme/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeChanger>
    <CssBaseline />
    <App />
  </ThemeChanger>,
);

serviceWorker.unregister();
