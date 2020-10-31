import createInitialState from "../components/form/constructForm/InitialState"

const caseAttributes = [
  { label: "COVID - facemasks", key: "covid" },
  { label: "Neighbour Dispute", key: "neighbour"},
  { label: "Friend / Carer", key: "friend_carer" },
  { label: "Domestic Violence", key: "domestic_violence" },
  { label: "Residential / Care Home", key: "care_home" },
  { label: "Verbal", key: "verbal" },
  { label: "Physical", key: "physical" },
  { label: "In the home", key: "home" },
  { label: "In the street", key: "street" },
  { label: "Public transport", key: "public_transport" },
  { label: "Other", key: "other" },
];
export const initialisedCaseAttributes = createInitialState(caseAttributes);

export default caseAttributes;
