import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default function DatePickers() {

  return (
    <form noValidate>
      <TextField
        label="3 Month Period Starting:"
        variant='filled'
        type="month"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}