import createInitialState from '../components/form/constructForm/InitialState';

const timeInfoType = [
  { label: 'Numerical (e.g. hours from charity log)', isChecked: false, key: 'numerical' },
  { label: 'Narrative (e.g. description about how hate crime work compares to other services)', isChecked: false, key: 'narrative' },
  { label: 'Neither this quarter', isChecked: false, key: 'neither' },

];
export const initialisedTimeInfo = createInitialState(timeInfoType);

export default timeInfoType;
