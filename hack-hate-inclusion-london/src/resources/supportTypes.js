import createInitialState from '../components/form/constructForm/InitialState';

const supportTypes = [
  { label: 'Hate Crime support - support to report / criminal justice system', key: 'hateCrime' },
  { label: 'Emotional Support', key: 'emotional' },
  {
    label:
      'General support - issues relating to  harassment / housing / financial / safeguarding',
    key: 'general',
  },
  { label: 'Signposted to support elsewhere', key: 'signposted' },
  { label: 'Other support', key: 'other' },
];

export const initialisedSupportTypes = createInitialState(supportTypes);

export default supportTypes;
