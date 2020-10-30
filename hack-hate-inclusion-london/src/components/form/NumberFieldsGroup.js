import React from 'react';
import Grid from '@material-ui/core/Grid';
import NumberField from './NumberField';

const NumberFields = ({ inputs, value, onBlur, minValue, maxValue }) => {
  const handleChange = (label, newValue) => {
    onBlur({ ...value, [label]: newValue });
  };
  return (
    <Grid container direction='column' spacing={2}>
      {inputs.map((input, index) => (
        <Grid item key={index}>
          <NumberField label={input.label} name={input.label} onBlur={handleChange} defaultValue={value[input.label]} minValue={minValue} maxValue={maxValue} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberFields;
