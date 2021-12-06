import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Button, Typography,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  message: {
    marginTop: '65px',
  },
});

const ThanksPage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={8} className={classes.message} justify='center'>
      <Grid container item justify='center' spacing={3}>
        <Grid item>
          <Typography component='h2' variant='h4'>
            Thank you filling out this form.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>This data will create a strong body of evidence on the work carried out by DDPOs to support Disabled Victims of Hate Crime.</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant='contained' color='primary' component={Link} to='/'>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThanksPage;
