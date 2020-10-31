import createInitialState from "../components/form/InitialState"

const genders = [
  { label: "Gender same as sex registered at birth", key: "same" },
  { label: "Gender different to sex registered at birth", key: "different" },
  { label: "Rather not say", key: "not_say" } 
];

export const initialisedGenders = createInitialState(genders);

export default genders;
