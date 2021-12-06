import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Brief = () => (
  <Grid container spacing={2} direction='column' alignItems='center'>
    <Grid item>
      <Typography variant='h4' component='h2' align='center'>
        Quarterly Data Collection on HC support from DDPOs
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant='h6' component='h3'>
        Collective Data for the London DDPO HC Partnership
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant='body1'>
        Thank you for filling out this form. This data will create a strong body of evidence on the work carried out by DDPOs to support Disabled Victims of Hate Crime.
      </Typography>
    </Grid>
  </Grid>
);
export default Brief;
