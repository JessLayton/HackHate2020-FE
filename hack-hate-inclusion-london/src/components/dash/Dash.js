import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getUnreportedCasesData, getReportingDetailsData } from '../../connections/DatabaseService';

require('highcharts/modules/accessibility')(Highcharts);

const useStyles = makeStyles({
  dash: {
    marginTop: '20px',
  },
});

const Dash = () => {
  const [unreportedCasesData, setUnreportedCasesData] = React.useState([{ data: [] }]);
  const [unreportedCasesAxis, setUnreportedCasesAxis] = React.useState({ categories: [] });
  const [reportingDetailsData, setReportingDetailsData] = React.useState([{ data: [] }]);
  const [reportingDetailsAxis, setReportingDetailsAxis] = React.useState({ categories: [] });

  console.log(unreportedCasesData);

  const unreportedCasesOptions = {
    title: {
      text: 'Reasons for Unreported Cases',
    },
    series: unreportedCasesData,
    chart: {
      type: 'column',
    },
    xAxis: {
      categories: unreportedCasesAxis,
    },
  };

  const reportingDetailsOptions = {
    title: {
      text: 'Number of Cases Reported over time',
    },
    series: reportingDetailsData,
    chart: {
      type: 'line',
    },
    xAxis: {
      categories: reportingDetailsAxis,
    },
  };

  const getData = async () => {
    const { xAxis: unreportedCasesXAxis, dataArray: unreportedCasesDataArray } = await getUnreportedCasesData();
    const { xAxis: reportingDetailsXAxis, dataArray: reportingDetailsDataArray } = await getReportingDetailsData();
    if (unreportedCasesXAxis && unreportedCasesDataArray) {
      setUnreportedCasesData(unreportedCasesDataArray);
      setUnreportedCasesAxis(unreportedCasesXAxis);
    }
    if (reportingDetailsXAxis && reportingDetailsDataArray) {
      setReportingDetailsData(reportingDetailsDataArray);
      setReportingDetailsAxis(reportingDetailsXAxis);
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
              options={unreportedCasesOptions}
            />
          </Grid>
          <Grid item>
            <HighchartsReact
              highcharts={Highcharts}
              options={reportingDetailsOptions}
            />
          </Grid>
          {/* TODO add data table for screen readers */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dash;
