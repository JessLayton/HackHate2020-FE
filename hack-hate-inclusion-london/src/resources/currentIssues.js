import createInitialState from '../components/form/constructForm/InitialState';

const currentIssues = [
  { label: 'Wearing/not wearing a facemask', key: 'facemask' },
  { label: 'Social distancing', key: 'distancing' },

];
export const initialisedCurrentIssues = createInitialState(currentIssues);

export default currentIssues;
