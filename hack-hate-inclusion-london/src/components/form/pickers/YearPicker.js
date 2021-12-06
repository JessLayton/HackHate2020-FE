import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, AdapterDateFns, LocalizationProvider } from '@mui/lab';

const YearPicker = ({ onChange, value }) => {
  const handleChange = (date) => {
    onChange(date);
  };

  return (
    <LocalizationProvider utils={AdapterDateFns}>
      <DatePicker views={['year']} value={value} onChange={handleChange} inputVariant='outlined' label='Year' required minDate='2000' />
    </LocalizationProvider>
  );
};

YearPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};

export default YearPicker;
