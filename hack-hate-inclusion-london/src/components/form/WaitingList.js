import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import NumberField from './numberfields/NumberField';

const WaitingList = ({
  isWaitingList, setIsWaitingList, waitingListCount, setWaitingListCount,
}) => {
  const handleChange = (event) => {
    setIsWaitingList(event.target.value);
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <FormControl>
          <FormLabel>
            Do you currently have a waiting list for hate crime support?
          </FormLabel>
          <RadioGroup
            name='waiting-list-radio-buttons'
            value={isWaitingList}
            onChange={handleChange}
          >
            <FormControlLabel value='no' control={<Radio />} label='No' />
            <FormControlLabel value='yes' control={<Radio />} label='Yes' />
            <FormControlLabel value='earlier' control={<Radio />} label='Not now but earlier in the quarter' />
          </RadioGroup>
        </FormControl>
      </Grid>
      {isWaitingList === 'yes' && (
        <Grid item>
          <NumberField
            label='How many people are currently on your waiting list?'
            defaultValue={waitingListCount}
            onBlur={setWaitingListCount}
            minValue={0}
          />
        </Grid>
      )}
    </Grid>
  );
};

WaitingList.propTypes = {
  isWaitingList: PropTypes.string.isRequired,
  setIsWaitingList: PropTypes.func.isRequired,
  waitingListCount: PropTypes.number.isRequired,
  setWaitingListCount: PropTypes.func.isRequired,
};

export default WaitingList;
