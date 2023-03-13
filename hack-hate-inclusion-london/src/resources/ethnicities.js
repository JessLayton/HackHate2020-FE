import createInitialState from '../components/form/constructForm/InitialState';

const ethnicities = [
  { label: 'English / Welsh / Scottish / Northern Irish / British', key: 'whiteBritish' },
  { label: 'Irish', key: 'whiteIrish' },
  { label: 'Irish Traveller / White Traveller Community', key: 'whiteTraveller' },
  { label: 'White background not listed above', key: 'whiteOther' },
  { label: 'White and Black Caribbean', key: 'mixedCaribbean' },
  { label: 'White and Black African', key: 'mixedAfrican' },
  { label: 'White and Asian', key: 'mixedAsian' },
  { label: 'Mixed / Multiple ethnic backgrounds not listed above', key: 'mixedMultiple' },
  { label: 'Indian', key: 'asianIndian' },
  { label: 'Pakistani', key: 'asianPakistani' },
  { label: 'Bangladeshi', key: 'asianBangladeshi' },
  { label: 'Chinese', key: 'asianChinese' },
  { label: 'Asian background not listed above', key: 'asianOther' },
  { label: 'African', key: 'blackAfrican' },
  { label: 'Caribbean', key: 'blackCaribbean' },
  { label: 'Black / African / Caribbean background not listed above', key: 'blackOther' },
  { label: 'Arab', key: 'arabOther' },
  { label: 'Romani', key: 'romani' },
  { label: 'Traveller Community not listed above', key: 'travellerOther' },
  { label: 'Ethnic group not listed above', key: 'other' },
  { label: 'Not recorded / unknown', key: 'unknown' },
];
export const initialisedEthnicities = createInitialState(ethnicities);

export default ethnicities;
