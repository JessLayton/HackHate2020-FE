import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

const YearPicker = ({ onChange, value }) => {
  const handleChange = (date) => {
    console.log(date);
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year']}
        value={value}
        onChange={handleChange}
        renderInput={(props) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...props} required />
        )}
        label='Year'
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
      />
    </LocalizationProvider>
  );
};

YearPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};

export default YearPicker;
