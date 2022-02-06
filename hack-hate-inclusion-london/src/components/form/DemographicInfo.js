import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const DemographicInfo = () => (
  <Grid container>
    <Grid container item spacing={2}>
      <Grid item>
        <Typography variant='h6'>
          Demographic Information
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          Demographic information (information about the groups that people belong to) is all optional.
          This might not be information your clients tell you.
          If you can provide any of the information below, tick the boxes you can, and fill out the new questions that will pop up.
          If you don&apos;t have any of the information, leave the tick boxes below blank and move on.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default DemographicInfo;
