import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const NumberField = ({
  label, defaultValue, onBlur, minValue, maxValue,
}) => {
  const handleChange = (event) => {
    onBlur(event.target.value);
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
          InputProps={{ inputProps: { min: minValue, max: maxValue, id: label } }}
          onBlur={handleChange}
          variant='outlined'
          size='small'
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
  maxValue: PropTypes.number.isRequired,
};

NumberField.defaultProps = {
  label: '',
};

export default NumberField;
