import createInitialState from '../components/form/constructForm/InitialState';

const sex = [
  { label: 'Female', key: 'female' },
  { label: 'Male', key: 'male' },
  { label: 'Intersex', key: 'intersex' },
  { label: 'Sex not listed', key: 'other' },
  { label: 'Not recorded / unknown', key: 'unknown' },
];

export const initialisedSex = createInitialState(sex);

export default sex;
