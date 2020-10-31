import createInitialState from "../components/form/InitialState"

const sex = [
  { label: "Male", key: "male"},
  { label: "Female", key: "female"}, 
  { label: "Other", key: "other"},
];

export const initialisedSex = createInitialState(sex);

export default sex;
