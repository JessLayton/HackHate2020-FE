import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const ConfirmGDPR = ({ gdprConfirmed, setGdprConfirmed }) => {
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(' ');

  const handleChange = (event) => {
    setGdprConfirmed(event.target.value);
    if (event.target.value === 'no') {
      setHelperText('You must read the information above before submitting the form');
      setError(true);
    } else {
      setHelperText(' ');
      setError(false);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <FormControl error={error}>
          <FormLabel>
            I have read and understood the information above, including the information about GDPR,
            and I am okay to continue completing the form.
          </FormLabel>
          <RadioGroup
            name='confirm-gdpr-radio-buttons'
            value={gdprConfirmed}
            onChange={handleChange}
          >
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='no' control={<Radio />} label='No' />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

ConfirmGDPR.propTypes = {
  gdprConfirmed: PropTypes.string.isRequired,
  setGdprConfirmed: PropTypes.func.isRequired,
};

export default ConfirmGDPR;
