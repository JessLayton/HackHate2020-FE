import createInitialState from '../components/form/constructForm/InitialState';

const orientations = [
  { label: 'Heterosexual / Straight', key: 'heterosexual' },
  { label: 'Gay / Lesbian', key: 'homosexual' },
  { label: 'Bisexual', key: 'bisexual' },
  { label: 'Pansexual', key: 'pansexual' },
  { label: 'Asexual', key: 'asexual' },
  { label: 'Sexuality not listed', key: 'other' },
  { label: 'Data not recorded / unknown', key: 'unknown' },
];

export const initialisedOrientations = createInitialState(orientations);

export default orientations;
