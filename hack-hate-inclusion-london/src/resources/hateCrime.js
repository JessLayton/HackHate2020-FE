import createInitialState from '../components/form/constructForm/InitialState';

const hateCrime = [
  { label: 'Verbal (direct)', key: 'verbal' },
  { label: 'Written (direct)', key: 'written' },
  { label: 'Physical violence against person', key: 'physical' },
  { label: 'Damage to property (e.g graffiti, vandalism, arson)', key: 'property' },
  { label: 'Non-physical violent harassment (ongoing)', key: 'harassment' },
  { label: 'Single / one-off threat of violence', key: 'oneOffViolence' },
  { label: 'Malicious rumours, complaints or circulations (e.g posters, notices)', key: 'rumours' },
  { label: 'Financial exploitation (e.g taking money, insisting they pay for everything all the time)', key: 'financial' },
  { label: 'Something else not listed', key: 'other' },
  { label: 'Data not recorded / unknown', key: 'unknown' },

];
export const initialisedHateCrime = createInitialState(hateCrime);

export default hateCrime;
