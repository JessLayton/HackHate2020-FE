import createInitialState from "../components/form/InitialState"

const genders = [
  { label: "Gender same as sex registered at birth" },
  { label: "Gender different to sex registered at birth" },
  { label: "Rather not say" } 
];

export const initialisedGenders = createInitialState(genders);

export default genders;
