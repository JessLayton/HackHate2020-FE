import { Button, TextField, Tooltip } from '@material-ui/core';
import React from 'react';

const OrgEntry = () => {
  const [orgName, setOrgName] = React.useState('');

  const handleChange = (event) => {
    setOrgName(event.target.value);
  };

  const handleSubmit = () => {
    alert(orgName);
  };

  const validateEntry = () => {
    if (orgName) {
      return false;
    }
    return true;
  };

  return (
    <>
      <TextField
        id='ddpo-name-input'
        required
        variant='filled'
        label='Organisation Registration'
        placeHolder='Enter an organisation name...'
        InputLabelProps={{ shrink: true }}
        value={orgName}
        onChange={handleChange}
        helperText='Please enter the name of your organisation here so that we can store the data '
      />
      <Tooltip>
        <Button 
          variant='contained'
          onClick={handleSubmit}
          disabled={!validateEntry}
        >
          Add Organisation
        </Button>
      </Tooltip>

    </>
  );
};

export default OrgEntry;
