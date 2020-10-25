import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
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
      {boroughs.map((borough, index) => (
        <CheckBox
          key={index}
          label={borough.label}
          name={borough.label}
          checked={checkedItems[index]}
          onChange={() => handleChange(index)}
        />
      ))}
    </FormGroup>
  );
};

export default Checkboxes;
