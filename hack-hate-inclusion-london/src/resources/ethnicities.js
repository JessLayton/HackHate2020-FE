import createInitialState from '../components/form/constructForm/InitialState';

const ethnicities = [
  { label: 'White - English / Welsh / Scottish / Northern Irish / British', key: 'whiteBritish' },
  { label: 'White - Irish', key: 'whiteIrish' },
  { label: 'White - Gypsy / Irish Traveller', key: 'whiteTraveller' },
  { label: 'White - background not listed above', key: 'whiteOther' },
  { label: 'Mixed / Multiple ethnic groups - White and Black Caribbean', key: 'mixedCaribbean' },
  { label: 'Mixed / Multiple ethnic groups - White and Black African', key: 'mixedAfrican' },
  { label: 'Mixed / Multiple ethnic groups - White and Asian', key: 'mixedAsian' },
  { label: 'Mixed / Multiple ethnic groups - background not listed above', key: 'mixedMultiple' },
  { label: 'Asian/Asian British - Indian', key: 'asianIndian' },
  { label: 'Asian/Asian British - Pakistani', key: 'asianPakistani' },
  { label: 'Asian/Asian British - Bangladeshi', key: 'asianBangladeshi' },
  { label: 'Asian/Asian British - Chinese', key: 'asianChinese' },
  { label: 'Asian/Asian British - background not listed above', key: 'asianOther' },
  { label: 'Black/Black British - African', key: 'blackAfrican' },
  { label: 'Black/Black British - Caribbean', key: 'blackCaribbean' },
  { label: 'Black/Black British - background not listed above', key: 'blackOther' },
  { label: 'Arab', key: 'arabOther' },
  { label: 'Ethnic group not listed above', key: 'other' },
  { label: 'Not recorded / unknown', key: 'unknown' },

];
export const initialisedEthnicities = createInitialState(ethnicities);

export default ethnicities;
