import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MuiThemeProvider from '@mui/styles/ThemeProvider';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';

import CloseIcon from '@mui/icons-material/Close';

import getTheme, { themes } from '../../theme/theme';
import fontFamilies from '../../theme/fontFamilies';
import { ThemeContext } from '../../theme/ThemeChanger';
import ThemeColourBoxes from './ThemeColourBoxes';

const drawerWidth = (fontSize) => {
  switch (fontSize) {
    case 12:
      return '400px';
    case 14:
      return '450px';
    case 16:
      return '500px';
    case 18:
      return '550px';
    case 20:
      return '600px';
    default:
      return '450px';
  }
};

const useStyles = makeStyles({
  sideSpacing: (currentTheme) => ({
    marginLeft: '20px',
    marginRight: '20px',
    width: drawerWidth(currentTheme.typography.fontSize),
  }),
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
              onClick={() => {
                setThemeDetails({ themeName });
              }}
            >
              Set Theme
            </Button>
          </Grid>
          <Grid item>
            <ThemeColourBoxes exampleTheme={themes[themeName]} />
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
        <Slider className={classes.slider} value={fontSize} min={12} max={20} step={2} marks={marks} onChange={handleFontSizeChange} />
        <Grid container alignItems='center' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                setThemeDetails({ fontSize });
              }}
            >
              Set Font Size
            </Button>
          </Grid>
          <Grid item>
            <MuiThemeProvider theme={getTheme({ fontSize, font: currentTheme.typography.fontFamily })}>
              <Typography>Example font size</Typography>
            </MuiThemeProvider>
          </Grid>
        </Grid>
      </>
    );
  };

  const getFontOptions = () => (
    <Grid container direction='column' spacing={2}>
      {Object.keys(fontFamilies).map((fontFamily) => (
        <Grid item container key={fontFamily} alignItems='center' spacing={1}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                setThemeDetails({ font: fontFamilies[fontFamily] });
              }}
            >
              Set Font
            </Button>
          </Grid>
          <Grid item>
            <Typography style={{ fontFamily: fontFamilies[fontFamily] }}>Example Text</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Drawer open={open} anchor='right' onClose={toggleOpen}>
      <Box className={classes.titleBackground}>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography variant='h4' component='h2' className={classes.titleStyles}>
              User Settings
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title='Close settings' aria-label='close-settings'>
              <IconButton onClick={toggleOpen}>
                <CloseIcon color='secondary' />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction='column' spacing={4} className={classes.sideSpacing}>
        <Grid container item spacing={1} direction='column'>
          <Grid item>
            <Typography variant='h6' component='h3'>
              App Colour Theme Options
            </Typography>
          </Grid>
          <Grid item>{getThemeOptions()}</Grid>
        </Grid>
        <Divider />
        <Grid item>
          <Typography variant='h6' component='h3'>
            App Font Size Options
          </Typography>
          {getFontSizeOptions()}
        </Grid>
        <Divider />
        <Grid container item spacing={1} direction='column'>
          <Grid item>
            <Typography variant='h6' component='h3'>
              {' '}
              App Font Style Options
            </Typography>
          </Grid>
          <Grid item>{getFontOptions()}</Grid>
        </Grid>
        <Divider />
      </Grid>
    </Drawer>
  );
};

SettingsDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default SettingsDrawer;
