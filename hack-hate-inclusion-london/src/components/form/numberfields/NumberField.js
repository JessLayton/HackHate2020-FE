import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const NumberField = ({
  label, helperText, defaultValue, onBlur, minValue,
}) => {
  const handleChange = (event) => {
    onBlur(Number(event.target.value));
  };
  return (
    <Grid container direction='column' spacing={1}>
      <Grid item>
        <label htmlFor={label}>{label}</label>
      </Grid>
      <Grid item>
        <TextField
          defaultValue={defaultValue}
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: minValue, id: label } }}
          onBlur={handleChange}
          variant='outlined'
          size='small'
          helperText={helperText}
        />
      </Grid>
    </Grid>
  );
};

NumberField.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  helperText: PropTypes.string,
};

NumberField.defaultProps = {
  label: '',
  helperText: '',
};

export default NumberField;
