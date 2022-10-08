import createInitialState from '../components/form/constructForm/InitialState';

const ageGroups = [
  { label: 'Under 18', key: 'Under18' },
  { label: 'Between 18 and 65 years old', key: '18to65' },
  { label: 'Over 65 years old', key: 'Over65' },
  { label: 'Not recorded / unknown', key: 'unknown' },
];
export const initialisedAgeGroups = createInitialState(ageGroups);

export default ageGroups;
