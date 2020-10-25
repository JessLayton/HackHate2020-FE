import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteField = ({ label, options }) => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="filled" />
      )}
    />
  );
};

export default AutocompleteField;
