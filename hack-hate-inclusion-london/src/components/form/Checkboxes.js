import React from "react";

import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

import CheckBox from "./Checkbox";

import boroughs from "../../resources/boroughs";

const Checkboxes = () => {
  const [checkedItems, setCheckedItems] = React.useState(boroughs);

  const handleChange = (index) => {
    const updatedCheckedItems = checkedItems;
    updatedCheckedItems[index] = !checkedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <FormGroup>
      <Grid container direction="row" spacing={1}>
        <Grid container item xs={12} sm={6} direction="column" spacing={1}>
          {boroughs
            .slice(0, Math.floor(boroughs.length/2))
            .map((borough, index) => (
              <Grid item key={index}>
                <CheckBox
                  label={borough.label}
                  name={borough.label}
                  checked={checkedItems[index]}
                  onChange={() => handleChange(index)}
                />
              </Grid>
            ))}
        </Grid>
        <Grid container item xs ={12} sm={6} direction="column" spacing={1}>
          {boroughs.slice(Math.ceil(boroughs.length/2)).map((borough, index) => (
            <Grid item key={index}>
              <CheckBox
                label={borough.label}
                name={borough.label}
                checked={checkedItems[index]}
                onChange={() => handleChange(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Checkboxes;
