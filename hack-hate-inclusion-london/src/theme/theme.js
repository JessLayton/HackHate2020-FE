import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';

const defaultTheme = {
  palette: {
    primary: {
      main: '#004D57',
      contrastText: '#9EEBE3',
    },
    secondary: {
      main: '#9EEBE3',
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
  return createMuiTheme(theme);
};

export { themes, getTheme as default };
