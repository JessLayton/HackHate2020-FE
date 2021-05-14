import createInitialState from '../components/form/constructForm/InitialState';

const whereDetails = [
  { label: 'In their home', key: 'home' },
  { label: "In another person's home", key: 'others_home' },
  { label: 'In the street', key: 'supported' },
  { label: 'Inside commercial, retail, government or community building', key: 'community' },
  { label: 'On public transport', key: 'public_transport' },
  { label: 'Online', key: 'online' },
  { label: 'Somewhere else not listed', key: 'other' },
  { label: 'Data not recorded / unknown', key: 'unknown' },

];

export const initialisedWhereDetails = createInitialState(whereDetails);

export default whereDetails;