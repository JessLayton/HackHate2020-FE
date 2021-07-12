import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Grid, IconButton, makeStyles, Button,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import AccessibleTooltip from '../accessible-components/AccessibleTooltip';
import SettingsDrawer from './SettingsDrawer';

const useStyles = makeStyles({
  navbarSpacer: {
    height: '100px',
  },
  toolBar: {
    minHeight: '85px',
  },
  appBar: {
    position: 'relative',
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
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid container item spacing={3} alignItems='center'>
              <Grid item>
                <AccessibleTooltip title='Go to home'>
                  <Link to='/'>
                    <img
                      src='data-collator-logo.png'
                      width='55px'
                      height='55px'
                      alt='Data Collator Logo'
                    />
                  </Link>
                </AccessibleTooltip>
              </Grid>
              <Grid item>
                <Typography variant='h3' component='h1'>
                  Data Collator
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              color='secondary'
              onClick={navigateToDash}
            >
              Dashboard
            </Button>
          </Grid>
          <Grid item>
            <Button color='secondary' onClick={navigateToForm}>Form</Button>
          </Grid>
          <Grid item>
            <AccessibleTooltip title='Open user settings'>
              <IconButton aria-label='user settings' onClick={handleToggleSettings}>
                <SettingsIcon color='secondary' fontSize='large' />
              </IconButton>
            </AccessibleTooltip>
          </Grid>
        </Toolbar>
      </AppBar>
      <SettingsDrawer open={settingsOpen} toggleOpen={handleToggleSettings} />
    </>
  );
};

export default Navbar;
