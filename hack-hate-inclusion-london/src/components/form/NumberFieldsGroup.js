import React from "react";
import Grid from "@material-ui/core/Grid";
import NumberField from "./NumberField";

const NumberFields = ({ inputs, value, onChange, minValue, maxValue }) => {
  const handleChange = (label, newValue) => {
    onChange({ ...value, [label]: newValue });
  };
  return (
    <Grid container direction="column" spacing={2}>
      {inputs.map((input, index) => (
        <Grid item key={index}>
          <NumberField
            label={input.label}
            name={input.label}
            onChange={handleChange}
            value={value[input.label]}
            minValue={minValue}
            maxValue={maxValue}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NumberFields;
