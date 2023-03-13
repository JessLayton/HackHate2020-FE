import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  welcome: {
    marginTop: '25px',
  },
});

const Welcome = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const navigateToForm = () => {
    navigate('/form');
  };

  const navigateToDash = () => {
    navigate('/dash');
  };

  return (
    <Grid container direction='column' spacing={8} alignItems='center' className={classes.welcome}>
      <Grid container item direction='column' spacing={3} alignItems='center'>
        <Grid item>
          <Typography variant='h4' component='h2'>
            Welcome to the Data Collator
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body1'>
            The Data Collator provides a unified way for all DDPOs to submit the records that they have collected on victims of hate crimes.
            Analysis of this data (viewable through the dashboard) will help us gain better understanding of the reporting and impact of these hate crimes.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction='row' spacing={6} justifyContent='center'>
        <Grid item>
          <Button variant='contained' color='primary' onClick={navigateToForm}>
            Go to form
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={navigateToDash}>
            Go to Dashboard
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
