import createInitialState from '../components/form/constructForm/InitialState';

const ethnicities = [
  { label: 'Asian', key: 'asian' },
  { label: 'Black', key: 'black' },
  { label: 'Latino', key: 'latino' },
  { label: 'Multiracial - Asian and Black', key: 'asianBlack' },
  { label: 'Multiracial - Asian and White', key: 'asianWhite' },
  { label: 'Multiracial - Black and White', key: 'blackWhite' },
  { label: 'Multiracial - Not listed', key: 'multiracial' },
  { label: 'White', key: 'white' },
  { label: 'Not Listed Elsewhere', key: 'notListed' },
];
export const initialisedEthnicities = createInitialState(ethnicities);

export default ethnicities;
