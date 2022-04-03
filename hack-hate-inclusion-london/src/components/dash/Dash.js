import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {
  getUnreportedCasesData, getReportingDetailsData, getReferralsOverTimeData, getAllReferralsData,
} from '../../connections/DatabaseService';

require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

const useStyles = makeStyles({
  dash: {
    marginTop: '20px',
  },
});

const Dash = () => {
  const [unreportedCasesData, setUnreportedCasesData] = React.useState([]);
  const [unreportedCasesAxis, setUnreportedCasesAxis] = React.useState([]);
  const [reportingDetailsData, setReportingDetailsData] = React.useState([]);
  const [reportingDetailsAxis, setReportingDetailsAxis] = React.useState([]);
  const [referralsOverTimeData, setReferralsOverTimeData] = React.useState([]);
  const [referralsOverTimeAxis, setReferralsOverTimeAxis] = React.useState([]);
  const [allReferralsData, setAllReferralsData] = React.useState([]);
  const [allReferralsAxis, setAllReferralsAxis] = React.useState([]);

  const unreportedCasesOptions = {
    title: {
      text: 'Reasons for not reporting cases to the police',
    },
    series: unreportedCasesData,
    chart: {
      type: 'column',
    },
    xAxis: {
      categories: unreportedCasesAxis,
    },
    exporting: {
      filename: 'reasons-for-not-reporting-cases-chart',
    },
  };

  const reportingDetailsOptions = {
    title: {
      text: 'Disparity in cases reported to the police',
    },
    series: reportingDetailsData,
    chart: {
      type: 'line',
    },
    xAxis: {
      categories: reportingDetailsAxis,
    },
    exporting: {
      filename: 'disparity-in-cases-reported-chart',
    },
  };

  const referralsOverTimeOptions = {
    title: {
      text: 'Referrals Over Time',
    },
    series: referralsOverTimeData,
    chart: {
      type: 'line',
    },
    xAxis: {
      title: {
        text: 'Referrals per quarter',
      },
      categories: referralsOverTimeAxis,
    },
    yAxis: {
      title: {
        text: 'Number of referrals',
      },
    },
    exporting: {
      filename: 'referrals-over-time-chart',
    },
  };

  const allReferralsOptions = {
    title: {
      text: 'All Referrals',
    },
    series: allReferralsData,
    chart: {
      type: 'column',
    },
    xAxis: {
      title: {
        text: 'Referral types',
      },
      categories: allReferralsAxis,
    },
    yAxis: {
      title: {
        text: 'Number of referrals',
      },
    },
    exporting: {
      filename: 'all-referrals--chart',
    },
  };

  const getData = async () => {
    const { xAxis: unreportedCasesXAxis, dataArray: unreportedCasesDataArray } = await getUnreportedCasesData();
    const { xAxis: reportingDetailsXAxis, dataArray: reportingDetailsDataArray } = await getReportingDetailsData();
    const { xAxis: referralsOverTimeXAxis, dataArray: referralsOverTimeDataArray } = await getReferralsOverTimeData();
    const { xAxis: allReferralsXAxis, dataArray: allReferralsDataArray } = await getAllReferralsData();
    if (unreportedCasesXAxis && unreportedCasesDataArray) {
      setUnreportedCasesData(unreportedCasesDataArray);
      setUnreportedCasesAxis(unreportedCasesXAxis);
    }
    if (reportingDetailsXAxis && reportingDetailsDataArray) {
      setReportingDetailsData(reportingDetailsDataArray);
      setReportingDetailsAxis(reportingDetailsXAxis);
    }
    if (referralsOverTimeXAxis && referralsOverTimeDataArray) {
      setReferralsOverTimeData(referralsOverTimeDataArray);
      setReferralsOverTimeAxis(referralsOverTimeXAxis);
    }
    if (allReferralsXAxis && allReferralsDataArray) {
      setAllReferralsData(allReferralsDataArray);
      setAllReferralsAxis(allReferralsXAxis);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

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
            <HighchartsReact
              highcharts={Highcharts}
              options={reportingDetailsOptions}
            />
          </Grid>
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              options={unreportedCasesOptions}
            />
          </Grid>
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              options={referralsOverTimeOptions}
            />
          </Grid>
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              options={allReferralsOptions}
            />
            {console.log(allReferralsOptions, unreportedCasesOptions)}
          </Grid>
          {/* TODO add data table for screen readers */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dash;
