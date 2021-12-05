import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { getCaseNotReportedData } from '../../connections/DatabaseService';

require('highcharts/modules/accessibility')(Highcharts);

const options = {
  title: {
    text: 'My chart',
  },
  series: [{
    data: [1, 2, 3],
  }],
  chart: {
    type: 'column',
  },
};

const useStyles = makeStyles({
  dash: {
    marginTop: '20px',
  },
});

const Dash = () => {
  const [caseNotReportedData, setCaseNotReportedData] = React.useState();
  console.log(caseNotReportedData);

  React.useEffect(() => {
    const response = getCaseNotReportedData();
    if (response) {
      setCaseNotReportedData(response);
    }
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
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
          {/* TODO add data table for screen readers */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dash;
