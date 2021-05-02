import createInitialState from '../components/form/constructForm/InitialState';

const intersectionalCrimes = [
  { label: 'Racial Hate Crime', key: 'racial' },
  { label: 'Religious Hate Crime', key: 'religious' },
  { label: 'Sexual Orientation Hate Crime', key: 'orientation' },
  { label: 'Transgender / Nonbinary Hate Crime', key: 'transgender_nonbinary' },
  { label: 'Misogynistic Hate Crime', key: 'misogynistic' },
  { label: 'Ageist Hate Crime', key: 'ageist' },
];

export const initialisedIntersectionalCrimes = createInitialState(intersectionalCrimes);

export default intersectionalCrimes;
