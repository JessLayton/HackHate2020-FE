import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

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
    <Grid container direction='row' spacing={8}>
      <Grid container item className={classes.message} direction='row' justify='center' spacing={3}>
         <Grid item >
        <Typography component='h2' variant='h4'>
          Thank you filling out this form.{' '}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>This data will create a strong body of evidence on the work carried out by DDPOs to support Disabled Victims of Hate Crime.</Typography>
      </Grid>
      </Grid>
     <Grid container item direction='row' justify='center'>
       <Grid item>
        <Button variant='contained' color='primary' onClick={returnToForm} >
          Back
        </Button>
      </Grid>
    </Grid>
     </Grid>
    
  );
};

export default ThanksPage;
