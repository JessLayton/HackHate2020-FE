import { Typography, Grid, Container } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

import { dashLocation } from '../../local/location';

const useStyles = makeStyles({
  dash: {
    marginTop: '20px',
  },
  iframe: {
    width: '100%',
    height: '1300px',
  },
});

const Dash = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' spacing={5}>
        <Grid item className={classes.dash}>
          <Typography variant='h4' component='h2'>
            Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <iframe src={dashLocation} title='Dashboard displaying collated data' className={classes.iframe} frameBorder={0} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dash;
