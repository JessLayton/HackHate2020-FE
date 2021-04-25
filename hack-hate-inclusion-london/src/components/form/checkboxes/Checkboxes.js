import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

import CheckBox from './Checkbox';

import boroughs from '../../../resources/boroughs';

const Checkboxes = ({ checkedItems, onChange }) => {
  const handleChange = (index, checked) => {
    const updatedItems = [...checkedItems];
    updatedItems[index].isChecked = checked;
    onChange(updatedItems);
  };

  const getCheckbox = (borough, index) => (
    <Grid item key={borough.label}>
      <CheckBox
        label={borough.label}
        name={borough.label}
        checked={checkedItems[index].isChecked}
        onChange={(checked) => handleChange(index, checked)}
      />
    </Grid>
  );

  return (
    <FormGroup>
      <Grid container direction='row' spacing={1}>
        <Grid container item xs={12} sm={6} direction='column' spacing={1}>
          {boroughs.slice(0, Math.floor(boroughs.length / 2)).map((borough, index) => getCheckbox(borough, index))}
        </Grid>
        <Grid container item xs={12} sm={6} direction='column' spacing={1}>
          {boroughs.slice(Math.ceil(boroughs.length / 2)).map((borough, index) => getCheckbox(borough, index + Math.ceil(boroughs.length / 2)))}
        </Grid>
      </Grid>
    </FormGroup>
  );
};

Checkboxes.propTypes = {
  checkedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkboxes;
