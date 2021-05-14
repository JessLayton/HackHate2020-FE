import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeChanger from './theme/ThemeChanger';

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(
      <ThemeChanger>
        <CssBaseline />
        <App />
      </ThemeChanger>,
      document.getElementById('root'),
    );
  });
} else {
  ReactDOM.render(
    <ThemeChanger>
      <CssBaseline />
      <App />
    </ThemeChanger>,
    document.getElementById('root'),
  );
}

serviceWorker.unregister();
