import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = {

};

const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#4167B2'
    }
  }
};

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#000"
    }
  }
};

const themes = {
  defaultTheme,
  lightTheme,
  darkTheme
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