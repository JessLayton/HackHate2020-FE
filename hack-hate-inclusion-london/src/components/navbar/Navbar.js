import React from 'react';
import { AppBar, Toolbar, Typography, Grid, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDrawer from './SettingsDrawer';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  navbarSpacer: {
    height: '100px',
  },
  toolBar: {
    minHeight: '85px',
  },
  logo: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const handleToggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const onLogoClick = () => {
    history.push('/');
  }

  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid container item spacing={2} alignItems='center'>
              <Grid item>
                <img
                  src='data-collator-logo.png'
                  width='55px' height='55px'
                  alt='Data Collator Logo'
                  onClick={onLogoClick}
                  className={classes.logo}
                />
              </Grid>
              <Grid item>
                <Typography variant='h3' component='h1'>
                  Data Collator
                </Typography>
              </Grid>
            </Grid>
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
