import createInitialState from '../components/form/constructForm/InitialState';

const ageGroups = [
  { label: 'Under 18', key: 'under_17' },
  { label: '18-65', key: 'eighteen_to_65' },
  { label: 'Over 65', key: 'sixtyfive_plus' },
];
export const initialisedAgeGroups = createInitialState(ageGroups);

export default ageGroups;
