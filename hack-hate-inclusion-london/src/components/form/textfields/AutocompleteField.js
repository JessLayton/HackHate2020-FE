import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteField = ({
  options, onChange, value, label,
}) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      value={value}
      onChange={handleChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      inputValue={inputValue}
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

    />
  );
};

AutocompleteField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.shape(),
  onChange: PropTypes.func.isRequired,
};

AutocompleteField.defaultProps = {
  label: '',
  value: undefined,
};

export default AutocompleteField;
