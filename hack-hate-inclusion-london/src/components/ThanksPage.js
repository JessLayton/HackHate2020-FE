import React from 'react';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
  message: {
    marginTop: '65px',
  },
});

const ThanksPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const returnToForm = () => {
    history.push('/');
  };

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
        <Button variant='contained' color='primary' onClick={returnToForm}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThanksPage;
