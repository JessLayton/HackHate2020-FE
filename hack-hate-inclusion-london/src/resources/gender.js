import createInitialState from '../components/form/constructForm/InitialState';

const genders = [
  { label: 'Cis Woman', key: 'cisWoman' },
  { label: 'Trans Woman', key: 'transWoman' },
  { label: 'Cis Man', key: 'cisMan' },
  { label: 'Trans Man', key: 'transMan' },
  { label: 'Intersex', key: 'intersex' },
  { label: 'Non-Binary', key: 'nonBinary' },
  { label: 'Gender identity not listed', key: 'unlisted' },
  { label: 'Data not recorded / unknown', key: 'unknown' },

];

export const initialisedGenders = createInitialState(genders);

export default genders;
