import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core';

import { getUserSubmissions } from '../../connections/DatabaseService';

const useStyles = makeStyles({
  message: {
    marginTop: '65px',
  },
});

const submissions = getUserSubmissions();

console.log(submissions);

const ManageSubmissions = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={8} className={classes.message} justifyContent='center'>
      <Typography component='h2' variant='h4'>
        Submissions
      </Typography>
    </Grid>
  );
};

export default ManageSubmissions;
