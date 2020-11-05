import React from 'react';
import {
  Button, Divider, Grid, TextField, Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { addOrganisation } from '../../connections/DatabaseService';
import DDPOStore from './DDPOStore';
import SnackbarStore from '../../snackbar/SnackbarStore';

const OrgEntry = () => {
  const history = useHistory();

  const [orgName, setOrgName] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setOrgName(event.target.value);
  };

  const validateEntry = (newOrg = orgName) => {
    if (!newOrg) {
      SnackbarStore.showError('Invalid Entry. Please enter an organisation name');
      setError(true);
      return false;
    }
    if (DDPOStore.getDdpos().some((org) => org.name === newOrg)) {
      SnackbarStore.showError('DDPO already exists');
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const handleValidate = (event) => {
    validateEntry(event.target.value);
  };

  const handleSubmit = async () => {
    if (validateEntry(orgName)) {
      const response = await addOrganisation(orgName);
      if (response && response.data && response.data.status === 'success') {
        DDPOStore.addDdpo(response.data.data);
        SnackbarStore.showSuccess(`Added DDPO: ${response.data.data.name}`);
      } else {
        SnackbarStore.showError('Failed to add DDPO');
      }
    }
  };

  const returnToForm = () => {
    history.push('/');
  };

  return (
    <Grid container justify='center'>
      <Grid container item xs={11} sm={10}>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <Typography variant='h4' component='h2'>
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
                onBlur={handleValidate}
                error={error}
                helperText={error ? 'Error: Invalid entry or DDPO already exists' : ''}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={handleSubmit}>
              Add Organisation
            </Button>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={returnToForm}>
              Return to form
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrgEntry;
