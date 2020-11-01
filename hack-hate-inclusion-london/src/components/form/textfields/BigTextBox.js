import React from 'react';
import TextField from '@material-ui/core/TextField';

const BigTextBox = ({ label, value, onBlur, validate }) => {
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    onBlur(event.target.value);
    handleValidate(event.target.value);
  };

  // const validEntry = (event) => {
  //   return (event.target.value.split(' ').length <= 300) ? true : false;
  // }

  const handleValidate = (value) => {
    if (validate(value)) {
      setError(false);
    }
    else {
      setError(true);
    }

  }

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
      variant='outlined'
      error={error}
      helperText={error ? 'Error: Entry must be 300 words or less' : ''}
    />
  );
};
export default BigTextBox;
