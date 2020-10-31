import createInitialState from "../components/form/InitialState"
const ethnicities = [
  { label: "White - English / Welsh / Scottish / Northern Irish / British", key: "white_eng_plus" },
  { label: "White - Irish", key: "white_irish" },
  { label: "White - Gypsy / Irish Traveller", key: "white_traveller" },
  { label: "White - Other", key: "white_other" },
  { label: "Mixed / Multiple ethnic groups - White and Black Caribbean", key: "mixed_caribbean" },
  { label: "Mixed / Multiple ethnic groups - White and Black African", key: "mixed_african" },
  { label: "Mixed / Multiple ethnic groups - White and Asian", key: "mixed_asian" },
  { label: "Mixed / Multiple ethnic groups - Other", key: "mixed_multiple" },
  { label: "Asian/Asian British - Indian", key: "asian_indian" },
  { label: "Asian/Asian British - Pakistani", key: "asian_pakistani" },
  { label: "Asian/Asian British - Bangladeshi", key: "asian_bangladeshi" },
  { label: "Asian/Asian British - Chinese", key: "asian_chinese" },
  { label: "Asian/Asian British - Other", key: "asian_other" },
  { label: "Black - African", key: "black_african" },
  { label: "Black - Caribbean", key: "black_caribbean" },
  { label: "Black - Other", key: "black_other" },
  { label: "Arab", key: "other_arab" },
  { label: "Any other ethnic group", key: "other" },

];
export const initialisedEthnicities =  createInitialState(ethnicities);

export default ethnicities;
