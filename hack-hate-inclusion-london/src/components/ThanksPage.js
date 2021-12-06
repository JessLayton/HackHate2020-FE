import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Button, Typography, Container,
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
    <Container maxWidth='lg'>
      <Grid container direction='column' spacing={8} className={classes.message} alignItems='center'>
        <Grid item>
          <Grid container direction='column' alignItems='center' spacing={3}>
            <Grid item>
              <Typography component='h2' variant='h4'>
                Thank you filling out this form.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>This data will create a strong body of evidence on the work carried out by DDPOs to support Disabled Victims of Hate Crime.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' component={Link} to='/'>
            Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThanksPage;
