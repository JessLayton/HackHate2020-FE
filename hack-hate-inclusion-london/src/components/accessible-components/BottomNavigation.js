import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  footer: {
  },
});

const BottomNavigation = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <nav>
        <Grid
          container
          direction='row'
          spacing={3}
          alignItems='center'
          justify='center'
        >
          <Grid item>
            <Link to='/'>
              <Typography>
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/form'>
              <Typography>
                Form
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/dash'>
              <Typography>
                Dashboard
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
