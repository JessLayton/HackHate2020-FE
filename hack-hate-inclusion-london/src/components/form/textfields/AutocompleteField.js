import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteField = ({ options, onChange, label }) => {
  const handleChange = (event, value) => {
    onChange(value);
  };
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
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

AutocompleteField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

AutocompleteField.defaultProps = {
  label: '',
};

export default AutocompleteField;
