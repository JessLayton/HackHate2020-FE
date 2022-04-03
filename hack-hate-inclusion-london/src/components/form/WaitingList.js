import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const WaitingList = ({ waitingList, setWaitingList }) => {
  const handleChange = (event) => {
    setWaitingList(event.target.value);
  };

  return (
    <Grid container>
      <Grid item>
        <FormControl>
          <FormLabel>
            Do you currently have a waiting list for hate crime support?
          </FormLabel>
          <RadioGroup
            name='waiting-list-radio-buttons'
            value={waitingList}
            onChange={handleChange}
          >
            <FormControlLabel value='no' control={<Radio />} label='No' />
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='earlier' control={<Radio />} label='Not now but earlier in the quarter' />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

WaitingList.propTypes = {
  waitingList: PropTypes.string.isRequired,
  setWaitingList: PropTypes.func.isRequired,
};

export default WaitingList;
