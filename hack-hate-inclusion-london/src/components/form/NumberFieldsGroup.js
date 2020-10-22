import React from "react";
import NumberField from "./NumberField";

const NumberFields = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <NumberField key={index} label={input.value} name={input.value} />
      ))}
    </>
  );
};

export default NumberFields;
