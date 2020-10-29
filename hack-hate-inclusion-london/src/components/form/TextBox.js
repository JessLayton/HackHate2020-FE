import React from "react";
import TextField from "@material-ui/core/TextField";

const TextBox = ({ value, placeholder, onBlur }) => {
    const handleChange = (event) => {
        onBlur(event.target.value);
      };
    return(
        <TextField
        defaultValue={value}
        onBlur={handleChange}
        variant="outlined"
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        multiline
      />
    )
}

export default TextBox;