import React from 'react';
import Grid from '@mui/material/Grid';
import Welcome from './Welcome';

const Landing = () => (
  <Grid container justifyContent='center'>
    <Grid container item xs={11} sm={10}>
      <Welcome />
    </Grid>
  </Grid>
);

export default Landing;
