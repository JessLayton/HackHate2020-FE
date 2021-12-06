import createInitialState from '../components/form/constructForm/InitialState';

const ageGroups = [
  { label: 'Under 18', key: 'Under18' },
  { label: '18-65', key: '18to65' },
  { label: 'Over 65', key: 'Over65' },
  { label: 'Not recorded / unknown', key: 'unknown' },
];
export const initialisedAgeGroups = createInitialState(ageGroups);

export default ageGroups;
