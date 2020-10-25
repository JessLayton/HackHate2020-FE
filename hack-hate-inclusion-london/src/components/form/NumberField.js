import React from "react";
import TextField from "@material-ui/core/TextField";

const NumberField = ({ label, value, onChange, minValue, maxValue }) => {
  const handleChange = (event) => {
    onChange(label, event.target.value);
  }
  return (
    <div>
    <TextField
    value={value}
      label={label}
      variant="filled"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: minValue, max: maxValue }}}
      onChange={handleChange}
    />
    </div>
  );
};

export default NumberField;
