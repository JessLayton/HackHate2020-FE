import createInitialState from "../components/form/constructForm/InitialState"

const supportTypes = [
  { label: "Hate Crime support - support to report / criminal justice system", key: "hate_crime" },
  { label: "Emotional Support", key: "emotional" },
  {
    label:
      "General support - issues relating to  harrassment / housing / financial / safeguarding", key: "general"
  },
  { label: "Other support", key: "other" },
];

export const initialisedSupportTypes = createInitialState(supportTypes);

export default supportTypes;
