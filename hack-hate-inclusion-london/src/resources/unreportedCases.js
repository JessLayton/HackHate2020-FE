import createInitialState from '../components/form/constructForm/InitialState';

const unreportedCases = [
  { label: 'Not enough evidence', key: 'lackEvidence' },
  { label: "Client decision - I don't trust Police", key: 'notTrustPolice' },
  { label: "Client decision - Police didn't believe me before", key: 'policeNotBelieve' },
  { label: 'Client decision - I am afraid to go to the Authorities', key: 'afraid' },
  { label: 'Client decision - I just want the abuse to stop', key: 'abuseStop' },
  {
    label:
      'Client decision - I need someone to talk to in confidence without making a report',
    key: 'talk',
  },
  { label: 'Client decision - Client had other reasons', key: 'clientOther' },
  { label: 'Other reason', key: 'other' },

];

export const initialisedUnreportedCases = createInitialState(unreportedCases);

export default unreportedCases;
