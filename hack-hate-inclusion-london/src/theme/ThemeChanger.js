import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from '@mui/styles/ThemeProvider';

import getTheme from './theme';

export const ThemeContext = React.createContext();

const ThemeChanger = ({ children }) => {
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
    fontSize,
  });

  return (
    <ThemeContext.Provider value={setThemeDetails}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeChanger.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeChanger;
