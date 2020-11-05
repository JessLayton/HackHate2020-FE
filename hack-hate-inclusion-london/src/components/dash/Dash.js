import { Typography } from '@material-ui/core';
import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    dash: {
        marginTop: '20px',
    },
    iframe: {
        border: 0,
    }
});

const Dash = () => {
    const classes = useStyles();
    return (

  <Grid container className={classes.dash}>
    <Grid container item justify='center'>
      <Grid container item xs={11} sm={10} spacing={5}>
        <Grid container item alignContent='center'>
          <Typography variant='h4' component='h2'>
            Dashboard
          </Typography>
        </Grid>
        <Grid container item alignContent='center'>
          <iframe src='http://localhost:8050' width={700} height={600} title='example1' className={classes.iframe}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)};

export default Dash;
