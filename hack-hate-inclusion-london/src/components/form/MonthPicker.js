import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const MonthPicker = ({ label, onChange, value }) => {
  const handleChange = (date) => {
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        views={["month", "year"]}
        label={label}
        value={value}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MonthPicker;
