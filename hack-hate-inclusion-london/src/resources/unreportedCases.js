import createInitialState from "../components/form/InitialState"

const unreportedCases = [
  { label: "Not enough evidence", key: "lack_evidence" },
  { label: "Client decision - I don't trust Police", key: "not_trust_police" },
  { label: "Client decision - Police didn't believe me before", key: "police_not_believe" },
  { label: "Client decision - I am afraid to go to the Authorities", key: "afraid" },
  { label: "Client decision - I just want the abuse to stop", key: "abuse_stop" },
  {
    label:
      "Client decision - I need someone to talk to in confidence without making a report", key: "talk"
  },
  { label: "Other", key: "other" },
];

export const initialisedUnreportedCases = createInitialState(unreportedCases);

export default unreportedCases;
