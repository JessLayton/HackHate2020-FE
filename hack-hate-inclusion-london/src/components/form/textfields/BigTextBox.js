import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const BigTextBox = ({
  label, value, onBlur, validate,
}) => {
  const [error, setError] = React.useState(false);

  const handleValidate = (valueToValidate) => {
    if (validate(valueToValidate)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    onBlur(event.target.value);
    handleValidate(event.target.value);
  };

  return (
    <TextField
      defaultValue={value}
      onBlur={handleChange}
      label={label}
      multiline
      fullWidth
      minRows={5}
      maxRows={20}
      InputLabelProps={{
        shrink: true,
      }}
      variant='outlined'
      error={error}
      helperText={error ? 'Error: Entry must be 300 words or less' : ''}
    />
  );
};

BigTextBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

BigTextBox.defaultProps = {
  label: '',
};

export default BigTextBox;
