import createInitialState from '../components/form/constructForm/InitialState';

const reportingDetails = [
  { label: 'Number of cases reported to the police', key: 'reported' },
  { label: 'Number of case supported but not reported to police', key: 'supported' },
];

export const initialisedReportingDetails = createInitialState(reportingDetails);

export default reportingDetails;
