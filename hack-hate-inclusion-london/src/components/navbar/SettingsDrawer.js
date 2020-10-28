import React from 'react';
import { Button, Drawer, Grid, makeStyles, Slider, Typography } from '@material-ui/core';

import { themes } from '../../theme/theme';
import fontFamilies from '../../theme/fontFamilies';
import { ThemeContext } from '../../theme/ThemeChanger';
import ThemeColourBoxes from './ThemeColourBoxes';

const useStyles = makeStyles(() => ({
  sideSpacing: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));

const SettingsDrawer = ({ open, toggleOpen }) => {
  const classes = useStyles();

  const setThemeDetails = React.useContext(ThemeContext);
  const [fontSize, setFontSize] = React.useState(Number(localStorage.getItem('appFontSize') || 14));

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
    setThemeDetails({ fontSize: newValue })
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
        label: 12,
      },
      {
        value: 14,
        label: 14,
      },
      {
        value: 16,
        label: 16,
      },
      {
        value: 18,
        label: 18,
      },
      {
        value: 20,
        label: 20,
      },
    ];
    return (
      <Slider
        value={fontSize}
        min={12}
        max={20}
        step={2}
        marks={marks}
        valueLabelDisplay='auto'
        onChange={handleFontSizeChange}
      />
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
    <Drawer open={true} anchor='right' onClose={toggleOpen}>
      <Grid container direction='column' spacing={2} className={classes.sideSpacing}>
        <Grid item>
          <Typography variant='h4' component='h2'>User Settings</Typography>
        </Grid>
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