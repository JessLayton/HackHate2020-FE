import React from 'react';
import { Grid, makeStyles, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  themeColourBox: {
    height: '20px',
    width: '20px',
    margin: '5px',
    border: '1px solid #000000',
  },
  primaryColour: (exampleTheme) => ({
    backgroundColor: exampleTheme.palette.primary.main,
  }),
  secondaryColour: (exampleTheme) => ({
    backgroundColor: exampleTheme.palette.secondary.main,
  }),
  errorColour: (exampleTheme) => ({
    backgroundColor: exampleTheme.palette.error.main,
  }),
  successColour: (exampleTheme) => ({
    backgroundColor: exampleTheme.palette.success.main,
  }),
});

const ThemeColourBoxes = ({ exampleTheme }) => {
  const classes = useStyles(exampleTheme);
  return (
    <Grid container direction='row'>
      <Tooltip title='Primary' aria-label='primary-colour'>
        <div className={`${classes.themeColourBox} ${classes.primaryColour}`} />
      </Tooltip>
      <Tooltip title='Secondary' aria-label='secondary-colour'>
        <div className={`${classes.themeColourBox} ${classes.secondaryColour}`} />
      </Tooltip>
      <Tooltip title='Error' aria-label='error-colour'>
        <div className={`${classes.themeColourBox} ${classes.errorColour}`} />
      </Tooltip>
      <Tooltip title='Success' aria-label='success-colour'>
        <div className={`${classes.themeColourBox} ${classes.successColour}`} />
      </Tooltip>
    </Grid>
  );
};

ThemeColourBoxes.propTypes = {
  exampleTheme: PropTypes.shape().isRequired,
};

export default ThemeColourBoxes;
