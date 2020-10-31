import {
  Box, Button, Grid, makeStyles, TextField, Tooltip, Typography,
} from '@material-ui/core';
import React from 'react';

import { addOrganisation } from '../connections/DatabaseService';
import SnackbarStore from '../snackbar/SnackbarStore';

const useStyles = makeStyles({
  margin: {
    marginLeft: '100px',
    marginRight: '100px',
  },
});

const OrgEntry = () => {
  const classes = useStyles();

  const [orgName, setOrgName] = React.useState('');

  const handleChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await addOrganisation(orgName);
    if (response) {
      SnackbarStore.showSuccess(`Added ${response.data.data.name}`);
    }
  };

  const validateEntry = () => {
    if (orgName) {
      return false;
    }
    return true;
  };

  return (
    <Box className={classes.margin}>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Typography variant='h3' component='h2'>
            Add A DDPO
          </Typography>
        </Grid>
        <Grid container item direction='column' spacing={1}>
          <Grid item>
            <Typography>Please enter the name of your organisation:</Typography>
          </Grid>
          <Grid item>
            <TextField
              id='ddpo-name-input'
              required
              variant='outlined'
              label='Organisation Registration'
              placeholder='Enter an organisation name...'
              InputLabelProps={{ shrink: true }}
              value={orgName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item>
          <Tooltip title='Submit'>
            <Button variant='contained' color='primary' onClick={handleSubmit} disabled={!validateEntry}>
              Add Organisation
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrgEntry;
