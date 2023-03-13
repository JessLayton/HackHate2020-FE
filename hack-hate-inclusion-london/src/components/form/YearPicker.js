import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const YearPicker = ({ onChange, value }) => {
  const handleChange = (date) => {
    onChange(date);
  };

  const today = new Date();
  const currentYear = today.getFullYear().toString();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label='Year'
        views={['year']}
        onChange={handleChange}
        defaultValue={dayjs(currentYear)}
        minDate={dayjs('2000')}
        value={dayjs(value)}
        required
      />
    </LocalizationProvider>
  );
};

YearPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
};

export default YearPicker;
