import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckBox = ({ label }) => {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={state.unchecked}
          onChange={handleChange}
          color="primary"
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
