import createInitialState from '../components/form/constructForm/InitialState';

const impairments = [
  { label: 'Physical', key: 'physical' },
  { label: 'Cognitive', key: 'cognitive' },
  { label: 'Sensory', key: 'sensory' },
  { label: 'Learning Difficulty', key: 'learningDifficulties' },
  { label: 'Neurodivergence', key: 'neurodivergent' },
  { label: 'Deaf', key: 'deaf' },
  { label: 'Deafened / hard of hearing', key: 'hardOfHearing' },
  { label: 'Mental health distress / trauma', key: 'mentalHealth' },
  { label: 'Long-term / chronic issues', key: 'longTerm' },
  { label: 'Condition / impairment / disability not listed', key: 'other' },
];

export const initialisedImpairments = createInitialState(impairments);

export default impairments;
