import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';

import ThemeChanger from './theme/ThemeChanger'

ReactDOM.render(
  <ThemeChanger>
    <CssBaseline />
    <App />
  </ThemeChanger>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

serviceWorker.unregister();
