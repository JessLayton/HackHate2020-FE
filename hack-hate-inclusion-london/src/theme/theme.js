import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';


const defaultTheme = {
  palette: {
    primary: {
      main: '#00bcd4',
      contrastText: '#005b67'
    },
    secondary: {
      main: '#005b67',
    },
    error: {
      main: '#aa2e25',
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
      main: grey[400],
    },
  },
};

const themes = {
  defaultTheme,
  monoChrome,
}

const getTheme = (themeDetails) => {
  const { themeName='defaultTheme', fontSize, font } = themeDetails;
  const theme = themes[themeName] || themes['defaultTheme'];

  const typography = {};
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