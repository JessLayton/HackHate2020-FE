import createInitialState from '../components/form/constructForm/InitialState';

const referralsAndEnquiries = [
  { label: 'Total number of referrals / new work started with hate crime victims', key: 'referrals' },
  {
    label: 'Number of people who came to you themselves (self-referred)',
    key: 'self',
    helperText: 'They may not have initially come for hate crime support and may not use those words but have accepted support for hate crimes.',
  },
  { label: 'Number of referrals via police / authorities', key: 'fromAuthorities' },
  { label: 'Number of referrals from other organisations', key: 'other' },
];

export const initialisedReferralsAndEnquiries = createInitialState(referralsAndEnquiries);

export default referralsAndEnquiries;
