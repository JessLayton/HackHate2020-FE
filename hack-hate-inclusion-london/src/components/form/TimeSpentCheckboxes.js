import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import CheckBox from './Checkbox';
import NumberField from './numberfields/NumberField';

const TimeSpentCheckboxes = ({
  typeOfTimeDataAvailable, setTypeOfTimeDataAvailable, timeSpentNumerical, setTimeSpentNumerical, timeSpentInfo, setTimeSpentInfo,
}) => {
  const handleChange = (index, checked) => {
    const updatedItems = [...typeOfTimeDataAvailable];
    updatedItems[index].isChecked = checked;
    setTypeOfTimeDataAvailable(updatedItems);
  };

  const getCheckbox = (infoType, index) => (
    <Grid item key={infoType.key}>
      <FormGroup>
        <CheckBox
          label={infoType.label}
          name={infoType.label}
          checked={typeOfTimeDataAvailable[index].isChecked}
          onChange={(checked) => handleChange(index, checked)}
        />
      </FormGroup>
    </Grid>
  );

  return (
    <Grid container item direction='column' spacing={2}>
      <Grid item>
        <Typography variant='subtitle1'>
          In terms of time spent on hate crime work (compared to other services you offer), what kind of information can you provide this quarter?
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={6} direction='column' spacing={1}>
        {typeOfTimeDataAvailable.map((infoType, index) => getCheckbox(infoType, index))}
      </Grid>
      {typeOfTimeDataAvailable.filter((info) => info.key === 'numerical')[0].isChecked
      && (
      <Grid item>
        <NumberField
          label='Numerical: How many minutes this quarter were spent on hate crime work?'
          defaultValue={timeSpentNumerical}
          onBlur={setTimeSpentNumerical}
          minValue={0}
        />
      </Grid>
      )}
      {typeOfTimeDataAvailable.filter((info) => info.key === 'narrative')[0].isChecked && (
      <Grid item>
        <TextField
          defaultValue={timeSpentInfo}
          onBlur={(event) => setTimeSpentInfo(event.target.value)}
          label='Narrative: How does hate crime work compare to other services your DDPO provides? (e.g. cases take longer for resolution etc.)'
          multiline
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
        />
      </Grid>
      )}
    </Grid>
  );
};

TimeSpentCheckboxes.propTypes = {
  typeOfTimeDataAvailable: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setTypeOfTimeDataAvailable: PropTypes.func.isRequired,
  timeSpentNumerical: PropTypes.number.isRequired,
  setTimeSpentNumerical: PropTypes.func.isRequired,
  timeSpentInfo: PropTypes.string.isRequired,
  setTimeSpentInfo: PropTypes.func.isRequired,
};

export default TimeSpentCheckboxes;
