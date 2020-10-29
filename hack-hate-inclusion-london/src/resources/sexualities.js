import createInitialState from "../components/form/InitialState"

const sexualities = [
  { label: "Heterosexual" },
  { label: "Homosexual or lesbian" },
  { label: "Bi-sexual" },
  { label: "Other" },
];

export const initialisedSexualities = createInitialState(sexualities);

export default sexualities;
