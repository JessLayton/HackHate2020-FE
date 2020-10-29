import createInitialState from "../components/form/InitialState"

const sex = [
  { label: "Male" },
  { label: "Female" }, 
  { label: "Other" },
];

export const initialisedSex = createInitialState(sex);

export default sex;
