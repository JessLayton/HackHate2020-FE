import createInitialState from '../components/form/constructForm/InitialState';

const committedBy = [
  { label: 'Family member', key: 'family' },
  { label: 'Perceived friend', key: 'friend' },
  { label: 'Neighbour', key: 'neighbour' },
  { label: 'Professional involved with individual', key: 'professional' },
  { label: 'Stranger in a professional capacity at time of hate crime (e.g bus driver, shop worker, police officer)', key: 'strangerProfessional' },
  { label: 'Stranger in non-professional capacity at time of hate crime (e.g a stranger on a bus or in a shop)', key: 'stranger' },
  { label: 'Someone else not listed', key: 'other' },
  { label: 'Data not recorded / unknown', key: 'unknown' },

];
export const initialisedCommittedBy = createInitialState(committedBy);

export default committedBy;
