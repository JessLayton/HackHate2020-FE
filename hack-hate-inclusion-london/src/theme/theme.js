import createTheme from '@mui/material/styles/createTheme';
import grey from '@mui/material/colors/grey';

const defaultTheme = {
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#005b67',
    },
    secondary: {
      main: '#005b67',
    },
    error: {
      main: '#aa2e25',
    },
    success: {
      main: '#4caf50',
    },
  },
};

const monoChrome = {
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
    error: {
      main: grey[700],
    },
    success: {
      main: grey[700],
    },
  },
};

const themes = {
  defaultTheme,
  monoChrome,
};

const typography = {
  button: {
    fontWeight: 600,
  },
};

const getTheme = (themeDetails) => {
  const { themeName = 'defaultTheme', fontSize, font } = themeDetails;
  const theme = themes[themeName] || themes.defaultTheme;

  if (fontSize) {
    typography.fontSize = fontSize;
  }
  if (font) {
    typography.fontFamily = font;
  }
  theme.typography = typography;
  return createTheme(theme);
};

export { themes, getTheme as default };
