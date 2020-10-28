import React from 'react';
import { Box, Button, Drawer, Grid, makeStyles, Slider, Typography, useTheme } from '@material-ui/core';

import { themes } from '../../theme/theme';
import fontFamilies from '../../theme/fontFamilies';
import { ThemeContext } from '../../theme/ThemeChanger';
import ThemeColourBoxes from './ThemeColourBoxes';

const useStyles = makeStyles({
  sideSpacing: {
    marginLeft: '12px',
    marginRight: '12px',
    width: '400px',
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
          value={fontSize}
          min={12}
          max={20}
          step={2}
          marks={marks}
          onChange={handleFontSizeChange}
        />
        <Typography style={{ fontSize }}>
          Regular font size
        </Typography>
      </>
  )};

  const getFontOptions = () => (
    <Grid container direction='column' spacing={2}>
      {Object.keys(fontFamilies).map((fontFamily, index) => (
        <Grid item container key={index} alignItems='center' spacing={1}>
          <Grid item>
            <Button
              variant='contained'
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
    <Drawer open={open} anchor='right' onClose={toggleOpen}>
      <Box className={classes.titleBackground}>
        <Typography variant='h4' component='h2' className={classes.titleStyles}>User Settings</Typography>
      </Box>
      <Grid container direction='column' spacing={2} className={classes.sideSpacing}>
        <Grid item>
          {getThemeOptions()}
        </Grid>
        <Grid item>
          {getFontSizeOptions()}
        </Grid>
        <Grid item>
          {getFontOptions()}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SettingsDrawer;