import createInitialState from '../components/form/constructForm/InitialState';

const yearQuarters = [
  { name: 'January - March' },
  { name: 'April - June' },
  { name: 'July - September' },
  { name: 'October - December' },
];

export const initialisedQuarters = createInitialState(yearQuarters);
export default yearQuarters;
