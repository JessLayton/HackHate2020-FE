import createInitialState from "../components/form/constructForm/InitialState"

const yearQuarters = [
  { value: "January - March" },
  { value: "April - June" },
  { value: "July - September" },
  { value: "October - December" }, 
];

export const initialisedQuarters = createInitialState(yearQuarters);
export default yearQuarters;
