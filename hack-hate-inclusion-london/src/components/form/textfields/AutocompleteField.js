import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AutocompleteField = ({
  options, onChange, label, helperText,
}) => {
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
          helperText={helperText}
        />
      )}
      onChange={handleChange}
    />
  );
};

AutocompleteField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.node,
};

AutocompleteField.defaultProps = {
  label: '',
  helperText: undefined,
};

export default AutocompleteField;
