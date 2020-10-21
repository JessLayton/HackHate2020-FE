import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteField = ({ label }) => {
  return ( 
    <Autocomplete
      id="combo-box-demo"
      options={DDPO}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} variant="filled" />}
    />
  );
}

const DDPO = [
  { name: 'Jess Test'},
  { name: 'Luke Test' },  
];

export default AutocompleteField;