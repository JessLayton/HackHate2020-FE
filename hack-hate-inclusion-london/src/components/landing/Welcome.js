import React from 'react';
import {
  Grid, Button, Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  welcome: {
    marginTop: '25px',
  },
});

const Welcome = () => {
  const classes = useStyles();

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
      <Grid container item direction='row' spacing={6} justify='center'>
        <Grid item>
          <Button variant='contained' color='primary' component={Link} to='/form'>
            Go to form
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' component={Link} to='/dash'>
            Go to Dashboard
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
