import createInitialState from '../components/form/constructForm/InitialState';

const reportingDetails = [
  {
    label: 'Number of cases supported to report to the police',
    key: 'reported',
    helperText: 'This is not counting police referrals, which are already reported, UNLESS a new hate crime was reported by the client.',
  },
  { label: 'Number of case supported but not reported to police', key: 'supported' },
];

export const initialisedReportingDetails = createInitialState(reportingDetails);

export default reportingDetails;
