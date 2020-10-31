import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteField = ({ options, onChange, value, label }) => {
  const handleChange = (event, value) => {
    onChange(value);
  };
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.value}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          required
          label={label}
        />
      )}
      onChange={handleChange}
    />
  );
};

export default AutocompleteField;
