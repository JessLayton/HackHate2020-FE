import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import AccessibleTooltip from '../accessible-components/AccessibleTooltip';

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
      <AccessibleTooltip title='Primary colour'>
        <div className={`${classes.themeColourBox} ${classes.primaryColour}`} />
      </AccessibleTooltip>
      <AccessibleTooltip title='Secondary'>
        <div className={`${classes.themeColourBox} ${classes.secondaryColour}`} />
      </AccessibleTooltip>
      <AccessibleTooltip title='Error'>
        <div className={`${classes.themeColourBox} ${classes.errorColour}`} />
      </AccessibleTooltip>
      <AccessibleTooltip title='Success'>
        <div className={`${classes.themeColourBox} ${classes.successColour}`} />
      </AccessibleTooltip>
    </Grid>
  );
};

ThemeColourBoxes.propTypes = {
  exampleTheme: PropTypes.shape().isRequired,
};

export default ThemeColourBoxes;
