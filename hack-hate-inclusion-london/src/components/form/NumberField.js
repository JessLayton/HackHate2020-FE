import React from "react";
import TextField from "@material-ui/core/TextField";

const NumberField = ({ label }) => {
  return (
    <TextField
      label={label}
      variant="filled"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default NumberField;
