import createInitialState from "../components/form/InitialState"

const gendersAndSexualities = [
  { label: "Cis Male" },
  { label: "Cis Female" },
  { label: "Male" },
  { label: "Female" },
  { label: "Heterosexual" },
  { label: "Homosexual" },
  { label: "Bi-sexual" },
  { label: "Lesbian" },
  { label: "Other" },
];

export const initialisedGendersAndSexualities = createInitialState(gendersAndSexualities);

export default gendersAndSexualities;
