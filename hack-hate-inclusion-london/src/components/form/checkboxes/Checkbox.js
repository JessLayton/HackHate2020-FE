import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = ({ label, name, checked, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={checked}
          onChange={handleChange}
          color='primary'
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
