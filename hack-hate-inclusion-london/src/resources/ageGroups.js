import createInitialState from "../components/form/InitialState"

const ageGroups = [
  { label: "Under 18" },
  { label: "18-65" },
  { label: "Over 18" },
];
export const initialisedAgeGroups = createInitialState(ageGroups);

export default ageGroups;
