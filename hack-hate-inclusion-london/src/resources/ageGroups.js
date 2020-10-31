import createInitialState from "../components/form/constructForm/InitialState"

const ageGroups = [
  { label: "Under 18", key: "under-18" },
  { label: "18-65", key: "18-65" },
  { label: "Over 65", key: "sixtyfive_plus" },
];
export const initialisedAgeGroups = createInitialState(ageGroups);

export default ageGroups;
