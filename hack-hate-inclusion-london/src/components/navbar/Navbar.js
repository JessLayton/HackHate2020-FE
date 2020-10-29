import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import SettingsDrawer from './SettingsDrawer';

const useStyles = makeStyles({
  navbarSpacer: {
    height: '100px',
  },
  toolBar: {
    minHeight: '85px'
  }
});

const Navbar = () => {
  const classes = useStyles();

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };


  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolBar}>
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
