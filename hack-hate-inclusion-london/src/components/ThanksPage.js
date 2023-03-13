import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  message: {
    marginTop: '65px',
  },
});

const ThanksPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const returnToForm = () => {
    navigate('/');
  };

  return (
    <Grid container spacing={8} className={classes.message} justifyContent='center'>
      <Grid container item justifyContent='center' spacing={3}>
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
        <Button variant='contained' color='primary' onClick={returnToForm}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThanksPage;
