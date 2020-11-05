import createInitialState from "../components/form/constructForm/InitialState"

const referralsAndEnquiries = [
  { label: "New referrals / enquiries for Disability Hate Crime cases", key: "hate_crime_cases" },
  { label: "Cases reported to the Police", key: "cases_reported" },
  { label: "Cases supported but not reported to Police", key: "cases_not_reported" },
  { label: "Self-referrals", key: "self" },
  { label: "Referrals from Police / Authorities", key: "from_authorities" },
];

export const initialisedReferralsAndEnquiries = createInitialState(referralsAndEnquiries);

export default referralsAndEnquiries;
