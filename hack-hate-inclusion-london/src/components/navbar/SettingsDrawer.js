import React from 'react';
import { Box, Button, Divider, Drawer, Grid, makeStyles, MuiThemeProvider, Slider, Typography, useTheme } from '@material-ui/core';

import getTheme, { themes } from '../../theme/theme';
import fontFamilies from '../../theme/fontFamilies';
import { ThemeContext } from '../../theme/ThemeChanger';
import ThemeColourBoxes from './ThemeColourBoxes';

const useStyles = makeStyles({
  sideSpacing: {
    marginLeft: '20px',
    marginRight: '20px',
    width: '420px',
  },
  titleBackground: (currentTheme) => ({
    backgroundColor: currentTheme.palette.primary.main,
    marginBottom: '10px',
  }),
  titleStyles: (currentTheme) => ({
    paddingLeft: '20px',
    paddingBottom: '10px',
    paddingTop: '10px',
    color: currentTheme.palette.primary.contrastText,
  }),
  slider: {
    marginBottom: '25px',
  },
});

const SettingsDrawer = ({ open, toggleOpen }) => {
  const currentTheme = useTheme();
  const classes = useStyles(currentTheme);

  const setThemeDetails = React.useContext(ThemeContext);
  const [fontSize, setFontSize] = React.useState(Number(localStorage.getItem('appFontSize') || 14));

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  const getThemeOptions = () => (
    <Grid container direction='column' spacing={2}>
      {Object.keys(themes).map((themeName) => (
        <Grid item container direction='row' key={themeName} alignItems='center' spacing={1}>
          <Grid item>
            <Button 
              variant='contained'
              color='primary'
              onClick={() => {setThemeDetails({ themeName })}}
            >
              Set Theme
            </Button>
          </Grid>
          <Grid item>
            <ThemeColourBoxes exampleTheme={themes[themeName]}/>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );

  const getFontSizeOptions = () => {
    const marks = [
      {
        value: 12,
        label: '12px',
      },
      {
        value: 14,
        label: '14px',
      },
      {
        value: 16,
        label: '16px',
      },
      {
        value: 18,
        label: '18px',
      },
      {
        value: 20,
        label: '20px',
      },
    ];
    return (
      <>
        <Slider
          className={classes.slider}
          value={fontSize}
          min={12}
          max={20}
          step={2}
          marks={marks}
          onChange={handleFontSizeChange}
        />
        <Grid container alignItems='center' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {setThemeDetails({ fontSize })}}
            >
              Set Font Size
            </Button>
          </Grid>
          <Grid item>
            <MuiThemeProvider theme={getTheme({ fontSize: fontSize, font: currentTheme.typography.fontFamily })}>
              <Typography>
                Example font size
              </Typography>
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </>
  )};

  const getFontOptions = () => (
    <Grid container direction='column' spacing={2}>
      {Object.keys(fontFamilies).map((fontFamily, index) => (
        <Grid item container key={index} alignItems='center' spacing={1}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {setThemeDetails({ font: fontFamilies[fontFamily] })}}
            >
              Set Font
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ fontFamily: fontFamilies[fontFamily] }} >
              This is some text with the font
          </Typography>
         </Grid>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Drawer open={true} anchor='right' onClose={toggleOpen}>
      <Box className={classes.titleBackground}>
        <Typography variant='h4' component='h2' className={classes.titleStyles}>User Settings</Typography>
      </Box>
      <Grid container direction='column' spacing={4} className={classes.sideSpacing}>
        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant='h6' component='h3'> App Colour Theme Options</Typography>
          </Grid>
          <Grid item>
            {getThemeOptions()}
          </Grid>
        </Grid>
        <Divider/>
        <Grid item >
            <Typography variant='h6' component='h3'> App Font Size Options</Typography>
            {getFontSizeOptions()}
        </Grid>
        <Divider/>
        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant='h6' component='h3'> App Font Style Options</Typography>
          </Grid>
          <Grid item>
            {getFontOptions()}
          </Grid>
        </Grid>
        <Divider/>
      </Grid>
    </Drawer>
  );
};

export default SettingsDrawer;