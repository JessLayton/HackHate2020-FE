import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const defaultTheme = createMuiTheme({

});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4167B2'
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000"
    }
  }
});

export { defaultTheme, lightTheme, darkTheme };