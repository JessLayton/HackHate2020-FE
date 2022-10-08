import createInitialState from '../components/form/constructForm/InitialState';

const ongoingDetails = [
  {
    label: 'How many individuals are you providing ongoing support for or doing ongoing work for?',
    key: 'ongoing',
    helperText: 'This could be anything from the range of services you provide, even if their case is open pending a court date, for example',
  },
];

export const initialisedOngoingDetails = createInitialState(ongoingDetails);

export default ongoingDetails;
