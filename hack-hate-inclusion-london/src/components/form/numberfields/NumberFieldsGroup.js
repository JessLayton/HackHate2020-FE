import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import NumberField from './NumberField';

const NumberFields = ({
  inputs, value, onBlur, minValue, maxValue,
}) => {
  const handleChange = (key, newValue) => {
    onBlur({ ...value, [key]: newValue === '' ? 0 : newValue });
  };
  return (
    <Grid container direction='column' spacing={2}>
      {inputs.map((input) => (
        <Grid item key={input.key}>
          <NumberField
            label={input.label}
            name={input.label}
            onBlur={(newValue) => handleChange(input.key, newValue)}
            defaultValue={value[input.key]}
            minValue={minValue}
            maxValue={maxValue}
          />
        </Grid>
      ))}
    </Grid>
  );
};

NumberFields.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.number).isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onBlur: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default NumberFields;
