import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

import CheckBox from './Checkbox';
import NumberFieldsGroup from './numberfields/NumberFieldsGroup';

const DemographicCheckboxes = ({
  typeOfDemographicDataAvailable,
  setTypeOfDemographicDataAvailable,
  ageCount,
  setAgeCount,
  ethnicityCount,
  setEthnicityCount,
  orientationsCount,
  setOrientationsCount,
  genderCount,
  setGenderCount,
}) => {
  const handleChange = (index, checked) => {
    const updatedItems = [...typeOfDemographicDataAvailable];
    updatedItems[index].isChecked = checked;
    setTypeOfDemographicDataAvailable(updatedItems);
  };

  const getValues = {
    Age: {
      value: ageCount,
      onBlur: setAgeCount,
    },
    Ethnicity: {
      value: ethnicityCount,
      onBlur: setEthnicityCount,
    },
    'Sex and Gender Identity': {
      value: genderCount,
      onBlur: setGenderCount,
    },
    'Sexual Orientation': {
      value: orientationsCount,
      onBlur: setOrientationsCount,
    },
  };

  const getCheckbox = (infoType, index) => (
    <Grid item key={infoType.label}>
      <FormGroup>
        <CheckBox
          label={infoType.label}
          name={infoType.label}
          checked={typeOfDemographicDataAvailable[index].isChecked}
          onChange={(checked) => handleChange(index, checked)}
        />
      </FormGroup>
    </Grid>
  );

  return (
    <Grid container direction='column' spacing={2}>
      <Grid container item xs={12} sm={6} direction='column' spacing={1}>
        {typeOfDemographicDataAvailable.map((infoType, index) => getCheckbox(infoType, index))}
      </Grid>
      {typeOfDemographicDataAvailable.filter((info) => info.isChecked).map(({ demographic, label, description }) => (
        <Grid item>
          <Grid>
            <Typography>
              {`${description} - please provide number of people:`}
            </Typography>
          </Grid>
          <NumberFieldsGroup
            inputs={demographic}
            value={getValues[label].value}
            onBlur={getValues[label].onBlur}
            minValue={0}
          />
        </Grid>
      ))}
    </Grid>

  );
};

DemographicCheckboxes.propTypes = {
  typeOfDemographicDataAvailable: PropTypes.arrayOf(PropTypes.shape({ isChecked: PropTypes.bool })).isRequired,
  setTypeOfDemographicDataAvailable: PropTypes.func.isRequired,
  ageCount: PropTypes.shape({}).isRequired,
  setAgeCount: PropTypes.func.isRequired,
  ethnicityCount: PropTypes.shape({}).isRequired,
  setEthnicityCount: PropTypes.func.isRequired,
  orientationsCount: PropTypes.shape({}).isRequired,
  setOrientationsCount: PropTypes.func.isRequired,
  genderCount: PropTypes.shape({}).isRequired,
  setGenderCount: PropTypes.func.isRequired,
};

export default DemographicCheckboxes;
