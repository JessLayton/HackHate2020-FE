import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';

import getTheme from './theme';

export const ThemeContext = React.createContext();

const ThemeChanger =  (props) => {
  const initialTheme = localStorage.getItem('appTheme') || 'defaultTheme';
  const initialFontSize = Number(localStorage.getItem('appFontSize') || 14);
  const initialFont = localStorage.getItem('appFont');

  const [themeName, setThemeName] = React.useState(initialTheme);
  const [fontSize, setFontSize] = React.useState(initialFontSize);
  const [font, setFont] = React.useState(initialFont);

  const setThemeDetails = (newThemeDetails) => {
    if (newThemeDetails.themeName) {
      localStorage.setItem('appTheme', newThemeDetails.themeName);
      setThemeName(newThemeDetails.themeName);
    }
    if (newThemeDetails.fontSize) {
      localStorage.setItem('appFontSize', newThemeDetails.fontSize);
      setFontSize(newThemeDetails.fontSize);
    }
    if (newThemeDetails.font) {
      localStorage.setItem('appFont', newThemeDetails.font);
      setFont(newThemeDetails.font);
    }

  };

  const theme = getTheme({
    themeName,
    font,
    fontSize
  });

  return (
    <ThemeContext.Provider value={setThemeDetails}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeChanger;
