import createInitialState from '../components/form/constructForm/InitialState';
import ageGroups from './ageGroups';
import ethnicities from './ethnicities';
import genders from './gender';
import orientations from './orientations';

const demographicInfoType = [
  {
    label: 'Age', description: 'Age of victims being supported', isChecked: false, demographic: ageGroups,
  },
  {
    label: 'Ethnicity', description: 'Ethnicity of victims being supported', isChecked: false, demographic: ethnicities,
  },
  {
    label: 'Sex and Gender Identity', description: 'Sex and Gender Identity of victims being supported', isChecked: false, demographic: genders,
  },
  {
    label: 'Sexual Orientation', description: 'Sexual Orientation of victims being supported', isChecked: false, demographic: orientations,
  },
];

export const initialisedDemographicInfo = createInitialState(demographicInfoType);

export default demographicInfoType;
