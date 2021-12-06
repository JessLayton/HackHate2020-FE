import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Grid, IconButton, Tooltip, Button,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import SettingsIcon from '@mui/icons-material/Settings';
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

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Grid container direction='row' spacing={3}>
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
              <Grid container direction='row' alignItems='center' spacing={1}>
                <Grid item>
                  <Button color='secondary' component={NavLink} to='/dash'>Dashboard</Button>
                </Grid>
                <Grid item>
                  <Button color='secondary' component={NavLink} to='/form'>Form</Button>
                </Grid>
                <Grid item>
                  <Tooltip title='Open user settings' aria-label='open user settings'>
                    <IconButton aria-label='user settings' onClick={handleToggleSettings}>
                      <SettingsIcon color='secondary' fontSize='large' />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SettingsDrawer open={settingsOpen} toggleOpen={handleToggleSettings} />
      <div className={classes.navbarSpacer} />
    </>
  );
};

export default Navbar;
