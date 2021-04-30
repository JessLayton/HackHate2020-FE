import createInitialState from '../components/form/constructForm/InitialState';

const hateCrime = [
  { label: 'Verbal or written', key: 'verbal' },
  { label: 'Physical violence', key: 'physical' },
  { label: 'Damage to property (e.g graffiti, vandalism, arson)', key: 'property' },
  { label: 'Non-physically violent harassment', key: 'harassment' },
  { label: 'Malicious rumours, complaints or circulations (e.g posters, notices)', key: 'rumours' },
  { label: 'Something else not listed', key: 'other' },
  { label: 'Data not recorded / unknown', key: 'unknown' },

];
export const initialisedHateCrime = createInitialState(hateCrime);

export default hateCrime;
