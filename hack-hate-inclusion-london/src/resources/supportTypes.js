import createInitialState from "../components/form/InitialState"

const supportTypes = [
  { label: "Hate Crime support - support to report / criminal justice system" },
  { label: "Emotional Support" },
  {
    label:
      "General support - issues relating to  harrassment / housing / financial / safeguarding",
  },
  { label: "Other support" },
];

export const initialisedSupportTypes = createInitialState(supportTypes);

export default supportTypes;
