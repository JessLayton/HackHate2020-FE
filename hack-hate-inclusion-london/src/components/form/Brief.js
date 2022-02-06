import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Brief = () => (
  <Grid container>
    <Grid container item spacing={2}>
      <Grid item>
        <Typography variant='h4' component='h2'>
          Quarterly Data Collection on Hate Crime support from DDPOs
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6' component='h3'>
          Collective Data for the London Deaf and Disabled People&apos;s Hate Crime Partnership
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Thank you for filling out this form. This data will create a strong body of evidence on the work carried out by DDPOs to support Disabled Victims of Hate Crime.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2'>
          All fields marked with * are required and must be filled.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2'>
          Please note, in line with GDPR compliance, we are not asking for information to be provided in a way that could identity a person.
          While we ask questions within the questionnaire about protected characteristics, these are anonymised numbers only. For case studies,
          please make sure that any cases used are fully anonymised and the information provided cannot lead back to an individual.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
export default Brief;
