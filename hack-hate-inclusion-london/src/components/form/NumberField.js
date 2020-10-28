import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const NumberField = ({ label, value, onChange, minValue, maxValue }) => {
  const handleChange = (event) => {
    onChange(label, event.target.value);
  };
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <label>{label}</label>
      </Grid>
      <Grid item>
        <TextField
          value={value}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: minValue, max: maxValue } }}
          onChange={handleChange}
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  );
};

export default NumberField;
