import createInitialState from '../components/form/constructForm/InitialState';

const genders = [
  { label: 'Cisgender', key: 'cis' },
  { label: 'Transgender / Nonbinary', key: 'transNonbinary' },
  { label: 'Gender identity not listed', key: 'unlisted' },
  { label: 'Not recorded / unknown', key: 'unknown' },

];

export const initialisedGenders = createInitialState(genders);

export default genders;
