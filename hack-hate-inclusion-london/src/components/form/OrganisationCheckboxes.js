import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

import { Button, Typography } from '@material-ui/core';
import CheckBox from './Checkbox';

import boroughs from '../../resources/boroughs';

const OrganisationCheckboxes = ({ checkedItems, onChange }) => {
  const [allChecked, setAllChecked] = React.useState(false);
  const [allBoroughs, setAllBoroughs] = React.useState(boroughs);

  const handleChange = (index, checked) => {
    const updatedItems = [...checkedItems];
    updatedItems[index].isChecked = checked;
    onChange(updatedItems);
  };

  const handleCheckAll = () => {
    const isChecked = !allChecked;
    if (isChecked) {
      allBoroughs.forEach((borough) => {
        borough.isChecked = true;
      });
    } else {
      allBoroughs.forEach((borough) => {
        borough.isChecked = false;
      });
    }
    setAllBoroughs(allBoroughs);
    setAllChecked(isChecked);
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
    <Grid container direction='column' spacing={2}>
      <Grid item>
        <Typography variant='subtitle1'>
          Boroughs Covered (Tick all that apply)
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction='row' justify='space-between' alignItems='center'>
          <Grid item>
            <Typography>All Boroughs: </Typography>
          </Grid>
          <Grid item>
            <Button onClick={handleCheckAll} variant='contained' color='primary'>
              {allChecked ? 'Uncheck all' : 'Check All'}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <FormGroup>
          <Grid container direction='row' spacing={1}>
            <Grid container item xs={12} sm={6} direction='column' spacing={1}>
              {allBoroughs.slice(0, Math.floor(allBoroughs.length / 2)).map((borough, index) => getCheckbox(borough, index))}
            </Grid>
            <Grid container item xs={12} sm={6} direction='column' spacing={1}>
              {allBoroughs.slice(Math.ceil(allBoroughs.length / 2)).map((borough, index) => getCheckbox(borough, index + Math.ceil(boroughs.length / 2)))}
            </Grid>
          </Grid>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

OrganisationCheckboxes.propTypes = {
  checkedItems: PropTypes.arrayOf(PropTypes.shape({
    isChecked: PropTypes.bool,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OrganisationCheckboxes;
