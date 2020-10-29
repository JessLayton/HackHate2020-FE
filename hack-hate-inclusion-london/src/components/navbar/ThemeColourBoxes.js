import React from 'react';
import { Grid, makeStyles, Tooltip } from '@material-ui/core';

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
});

const ThemeColourBoxes = ({ exampleTheme }) => {
  const classes = useStyles(exampleTheme);
  return (
    <Grid container direction='row'>
      <Tooltip title='Primary' aria-label='primary-colour'>
        <div className={`${classes.themeColourBox} ${classes.primaryColour}`}/>
      </Tooltip>
      <Tooltip title='Secondary' aria-label='secondary-colour'>
        <div className={`${classes.themeColourBox} ${classes.secondaryColour}`}/>
      </Tooltip>
      <Tooltip title='Error' aria-label='error-colour'>
        <div className={`${classes.themeColourBox} ${classes.errorColour}`}/>
      </Tooltip>
    </Grid>
  )
};

export default ThemeColourBoxes;
