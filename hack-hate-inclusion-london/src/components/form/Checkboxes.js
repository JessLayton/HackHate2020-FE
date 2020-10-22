import React from "react";
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
    <>
      {boroughs.map((borough, index) => (
        <CheckBox
          key={index}
          label={borough.value}
          name={borough.value}
          checked={checkedItems[index]}
          onChange={() => handleChange(index)}
        />
      ))}
    </>
  );
};

export default Checkboxes;
