import createInitialState from '../components/form/constructForm/InitialState';

const waitingList = [
  {
    label: 'How many people are currently on your waiting list?',
    key: 'waitingList',
  },
];

export const initialisedWaitingList = createInitialState(waitingList);

export default waitingList;
