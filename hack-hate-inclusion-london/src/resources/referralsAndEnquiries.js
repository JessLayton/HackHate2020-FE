import createInitialState from "../components/form/InitialState"

const referralsAndEnquiries = [
  { label: "New referrals / enquiries for Disability Hate Crime cases" },
  { label: "Cases reported to the Police" },
  { label: "Cases supported but not reported to Police" },
  { label: "Self-referrals" },
  { label: "Referrals from Police / Authorities" },
];

export const initialisedReferralsAndEnquiries = createInitialState(referralsAndEnquiries);

export default referralsAndEnquiries;
