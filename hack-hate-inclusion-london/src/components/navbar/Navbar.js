import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Grid, IconButton, makeStyles, Tooltip, Button,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDrawer from './SettingsDrawer';

const useStyles = makeStyles({
  navbarSpacer: {
    height: '100px',
  },
  toolBar: {
    minHeight: '85px',
  },
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const navigateToDash = () => {
    history.push('/dash');
  };

  const navigateToForm = () => {
    history.push('/form');
  };

  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid container item spacing={3} alignItems='center'>
              <Grid item>
                <Tooltip title='Go to home' aria-label='navigate-to-home'>
                  <Link to='/'>
                    <img
                      src='data-collator-logo.png'
                      width='55px'
                      height='55px'
                      alt='Data Collator Logo'
                    />
                  </Link>
                </Tooltip>
              </Grid>
              <Grid item>
                <Typography variant='h3' component='h1'>
                  Data Collator
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button color='secondary' onClick={navigateToDash}>Dashboard</Button>
          </Grid>
          <Grid item>
            <Button color='secondary' onClick={navigateToForm}>Form</Button>
          </Grid>
          <Grid item>
            <Tooltip title='Open user settings' aria-label='open user settings'>
              <IconButton aria-label='user settings' onClick={handleToggleSettings}>
                <SettingsIcon color='secondary' fontSize='large' />
              </IconButton>
            </Tooltip>
          </Grid>
        </Toolbar>
      </AppBar>
      <SettingsDrawer open={settingsOpen} toggleOpen={handleToggleSettings} />
      <div className={classes.navbarSpacer} />
    </>
  );
};

export default Navbar;
