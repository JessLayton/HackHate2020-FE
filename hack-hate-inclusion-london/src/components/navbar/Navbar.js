import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import useTheme from '@material-ui/core/styles/useTheme';

import SettingsDrawer from './SettingsDrawer';

const useStyles = makeStyles({
  navbarSpacer: theme => ({
    height: theme.navbar ? theme.navbar.height : '100px',
  }),
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };


  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h3' component='h1'>
                Hack Hate 2020
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title='Open user settings' aria-label='open user settings'>
                <IconButton aria-label='user settings' onClick={handleToggleSettings}>
                  <SettingsIcon color='secondary'/>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SettingsDrawer open={settingsOpen} toggleOpen={handleToggleSettings}/>
      <div className={classes.navbarSpacer}/>
    </>
  );
};

export default Navbar;
