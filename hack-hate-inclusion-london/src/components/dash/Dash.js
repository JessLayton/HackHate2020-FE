import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Highcharts from 'highcharts';

import {
  getUnreportedCasesData, getReportingDetailsData, getReferralsOverTimeData, getAllReferralsData, getIntersectionalData, getSupportProvidedData,
} from '../../connections/DatabaseService';
import MultipleBarChart from './MultipleBarChart';
import CombinedBarChart from './CombinedBarChart';
import MultipleLineChart from './MultipleLineChart';
import SingleLineChart from './SingleLineChart';

require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

const useStyles = makeStyles({
  dash: {
    marginTop: '20px',
  },
});

const Dash = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item justify='center'>
        <Grid container direction='column' item xs={11} spacing={5}>
          <Grid item className={classes.dash}>
            <Typography variant='h4' component='h2'>
              Dashboard
            </Typography>
          </Grid>
          <Grid item>
            <MultipleLineChart
              getData={getReportingDetailsData}
              title='Disparity in cases reported to the police'
              exportFilename='disparity-in-cases-reported-chart'
            />
          </Grid>
          <Grid item>
            <MultipleBarChart
              getData={getUnreportedCasesData}
              title='Reasons for not reporting cases to the police'
              exportFilename='reasons-for-not-reporting-cases-chart'
            />
          </Grid>
          <Grid item>
            <SingleLineChart
              getData={getReferralsOverTimeData}
              title='Referrals Over Time'
              xAxisLabel='Referrals per quarter'
              yAxisLabel='Number of referrals'
              exportFilename='referrals-over-time-chart'
            />
          </Grid>
          <Grid item>
            <CombinedBarChart
              getData={getAllReferralsData}
              title='All Referrals'
              xAxisLabel='Referral type'
              yAxisLabel='Number of referrals'
              exportFilename='all-referrals-chart'
            />
          </Grid>
          <Grid item>
            <CombinedBarChart
              getData={getIntersectionalData}
              title='Intersectional Hate Crime'
              xAxisLabel='Intersectional hate crime type'
              yAxisLabel='Number of cases'
              exportFilename='intersections-hate-crime-chart'
            />
          </Grid>
          <Grid item>
            <MultipleBarChart
              getData={getSupportProvidedData}
              title='Support Provided To Individuals'
              exportFilename='support-provided-chart'
            />
          </Grid>
          {/* TODO: add data table for screen readers */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dash;
