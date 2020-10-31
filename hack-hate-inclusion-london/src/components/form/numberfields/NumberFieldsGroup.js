import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberField from './NumberField';

const NumberFields = ({ inputs, value, onBlur, minValue, maxValue }) => {
  const handleChange = (key, newValue) => {
    onBlur({ ...value, [key]: newValue });
  };
  return (
    <Grid container direction='column' spacing={2}>
      {inputs.map((input, index) => (
        <Grid item key={index}>
          <NumberField label={input.label} name={input.label} onBlur={(newValue) => handleChange(input.key, newValue)} defaultValue={value[input.key]} minValue={minValue} maxValue={maxValue} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberFields;