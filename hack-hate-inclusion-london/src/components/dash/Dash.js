import { Typography } from '@material-ui/core';
import React from 'react';

import { dashLocation } from '../../local/location';

import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    dash: {
        marginTop: '20px',
    },
    iframe: {
      width: '100%',
      height: '1300px',
    }
});

const Dash = () => {
    const classes = useStyles();
    return (

  <Grid container >
    <Grid container item justify='center'>
      <Grid container direction='column' item xs={11} spacing={5}>
        <Grid item className={classes.dash}>
          <Typography variant='h4' component='h2'>
            Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <iframe src={dashLocation} title='Dashboard displaying collated data' className={classes.iframe} frameBorder={0}/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)};

export default Dash;
