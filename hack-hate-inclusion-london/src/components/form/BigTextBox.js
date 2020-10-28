import React from "react";
import TextField from "@material-ui/core/TextField";

const BigTextBox = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      label={label}
      multiline
      fullWidth
      rows={5}
      rowsMax={20}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  );
};
export default BigTextBox;
