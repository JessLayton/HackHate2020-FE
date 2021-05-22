import createInitialState from '../components/form/constructForm/InitialState';

const impairments = [
  { label: 'Physical', key: 'physical' },
  { label: 'Cognitive', key: 'cognitive' },
  { label: 'Sensory', key: 'sensory' },
  { label: 'Learning Difficulties', key: 'learningDifficulties' },
  { label: 'Neurodivergent', key: 'neurodivergent' },
  { label: 'Deaf', key: 'deaf' },
  { label: 'Deafened / hard of hearing', key: 'hardOfHearing' },
  { label: 'Mental health issues', key: 'mentalHealth' },
  { label: 'Long-term issues', key: 'longTerm' },
  { label: 'Other', key: 'other' },
];

export const initialisedImpairments = createInitialState(impairments);

export default impairments;
