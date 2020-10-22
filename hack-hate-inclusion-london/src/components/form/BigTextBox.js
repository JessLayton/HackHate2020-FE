import React from "react";
import TextField from "@material-ui/core/TextField";

const BigTextBox = ({ label }) => {
  return (
    <TextField label={label} variant="filled" multiline fullWidth rows={3} />
  );
};
export default BigTextBox;
