import createInitialState from "../components/form/InitialState"
const ethnicities = [
  { label: "White - English / Welsh / Scottish / Northern Irish / British" },
  { label: "White - Irish" },
  { label: "White - Gypsy / Irish Traveller" },
  { label: "White - Other" },
  { label: "Mixed / Multiple ethnic groups - White and Black Caribbean" },
  { label: "Mixed / Multiple ethnic groups - White and Black African" },
  { label: "Mixed / Multiple ethnic groups - White and Asian" },
  { label: "Mixed / Multiple ethnic groups - Other" },
  { label: "Asian/Asian British - Indian" },
  { label: "Asian/Asian British - Pakistani" },
  { label: "Asian/Asian British - Bangladeshi" },
  { label: "Asian/Asian British - Other" },
  { label: "Black - African" },
  { label: "Black - Caribbean" },
  { label: "Black - British" },
  { label: "Black - Other" },
];
export const initialisedEthnicities =  createInitialState(ethnicities);

export default ethnicities;
