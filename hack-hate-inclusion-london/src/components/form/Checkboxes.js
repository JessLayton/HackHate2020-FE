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
        <Grid container item direction="column" spacing={1}>
          {boroughs
            .slice(0, Math.floor(boroughs.length))
            .map((borough, index) => (
              <Grid item>
                <CheckBox
                  key={index}
                  label={borough.label}
                  name={borough.label}
                  checked={checkedItems[index]}
                  onChange={() => handleChange(index)}
                />
              </Grid>
            ))}
        </Grid>
        <Grid container item direction="column" spacing={1}>
          {boroughs.slice(Math.ceil(boroughs.length)).map((borough, index) => (
            <Grid item>
              <CheckBox
                key={index}
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
