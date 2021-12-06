import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeChanger from './theme/ThemeChanger';

ReactDOM.render(
  <ThemeChanger>
    <CssBaseline />
    <App />
  </ThemeChanger>,
  document.getElementById('root'),
);

serviceWorker.unregister();
