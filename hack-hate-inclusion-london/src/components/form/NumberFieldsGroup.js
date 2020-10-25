import React from "react";
import NumberField from "./NumberField";

const NumberFields = ({ inputs, value, onChange, minValue, maxValue}) => {
const handleChange = (label, newValue) => {
  onChange({ ...value, [label]: newValue });
}
  return (
    <>
      {inputs.map((input, index) => (
        <NumberField key={index} label={input.label} name={input.label} onChange={handleChange} value={value[input.label]} minValue={minValue} maxValue={maxValue} />
      ))}
    </>
  );
};

export default NumberFields;
