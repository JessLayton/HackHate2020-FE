import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Brief = () => (
  <>
    <Grid container>
      <Grid container item spacing={2}>
        <Grid item>
          <Typography variant='h4' component='h2'>
            Quarterly Data Collection on HC support from DDPOs
          </Typography>
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
    </Grid>
  </>
);
export default Brief;
