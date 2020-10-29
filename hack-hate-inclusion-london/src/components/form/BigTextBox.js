import React from "react";
import TextField from "@material-ui/core/TextField";

const BigTextBox = ({ label, value, onBlur }) => {
  const handleChange = (event) => {
    onBlur(event.target.value);
  };

  return (
    <TextField
      defaultValue={value}
      onBlur={handleChange}
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
