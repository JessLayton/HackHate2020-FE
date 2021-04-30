import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';

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
