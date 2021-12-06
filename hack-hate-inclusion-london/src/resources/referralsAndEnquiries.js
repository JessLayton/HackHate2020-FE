import createInitialState from '../components/form/constructForm/InitialState';

const referralsAndEnquiries = [
  { label: 'Total number of referrals', key: 'referrals' },
  { label: 'Number of self-referrals', key: 'self' },
  { label: 'Number of referrals via police / authorities', key: 'fromAuthorities' },
];

export const initialisedReferralsAndEnquiries = createInitialState(referralsAndEnquiries);

export default referralsAndEnquiries;
