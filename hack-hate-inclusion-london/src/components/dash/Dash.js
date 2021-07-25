import { Typography, Grid, makeStyles } from '@material-ui/core';

import React from 'react';
import Plotly from 'plotly.js';

import createPlotlyComponent from 'react-plotly.js/factory';

import { getCaseNotReportedData } from '../../connections/DatabaseService';

const Plot = createPlotlyComponent(Plotly);
// import { dashLocation } from '../../local/location';

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
  const [caseNotReportedData, setCaseNotReportedData] = React.useState();

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
          <Plot
            data={caseNotReportedData}
            layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dash;
