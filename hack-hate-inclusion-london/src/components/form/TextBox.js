import React from "react";
import TextField from "@material-ui/core/TextField";

const TextBox = ({ value, placeholder, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
      };
    return(
        <TextField
        value={value}
        onChange={handleChange}
        variant="outlined"
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
}

export default TextBox;