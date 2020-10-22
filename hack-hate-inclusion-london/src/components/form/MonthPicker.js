import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function DatePickers() {

  return (
      <TextField
        label="3 Month Period Starting:"
        variant='filled'
        type="month"
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}