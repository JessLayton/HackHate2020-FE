import createInitialState from "../components/form/InitialState"

const yearQuarters = [
  { value: "April - June" },
  { value: "July - September" },
  { value: "October - December" },
  { value: "January - March" },
];

export const initialisedQuarters = createInitialState(yearQuarters);
export default yearQuarters;
