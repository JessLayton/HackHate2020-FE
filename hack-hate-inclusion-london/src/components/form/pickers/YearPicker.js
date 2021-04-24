import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const YearPicker = ({ onChange, value }) => {
  const handleChange = (date) => {
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker views={['year']} value={value} onChange={handleChange} inputVariant='outlined' label='Year' required minDate='2000'/>
    </MuiPickersUtilsProvider>
  );
};

export default YearPicker;
