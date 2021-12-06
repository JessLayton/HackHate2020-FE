import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import App from './App';
import * as serviceWorker from './serviceWorker';

import ThemeChanger from './theme/ThemeChanger';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeChanger>
      <CssBaseline />
      <App />
    </ThemeChanger>
  </StyledEngineProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
