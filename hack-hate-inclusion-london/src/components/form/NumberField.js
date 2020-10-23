import React from "react";
import { TextField, FormControl } from "@material-ui/core";

const NumberField = ({ label }) => {
  return (
    <FormControl>
    <TextField
      label={label}
      variant="filled"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
    </FormControl>
  );
};

export default NumberField;
