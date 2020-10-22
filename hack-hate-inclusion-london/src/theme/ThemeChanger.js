import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';

import { defaultTheme, lightTheme, darkTheme } from './theme';

const themes = { defaultTheme, lightTheme, darkTheme };

const getTheme = (themeName) => {
  return themes[themeName];
};

export const ThemeContext = React.createContext();

const ThemeChanger =  (props) => {
  const initialTheme = localStorage.getItem('appTheme') || 'defaultTheme';
  const [themeName, _setThemeName] = React.useState(initialTheme);

  const setThemeName = (newThemeName) => {
    localStorage.setItem('appTheme', newThemeName);
    _setThemeName(newThemeName);
  };

  const theme = getTheme(themeName);

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeChanger;