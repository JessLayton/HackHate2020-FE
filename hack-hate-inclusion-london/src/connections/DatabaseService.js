import { post, get } from './DatabaseConnector';

const postForm = async (formData) => {
  try {
    // const response = await post('/api/form', { formData });
    // console.log(response);
    console.log(formData);
  } catch (err) {
    console.error(err);
  }
};

const constructForm = (
  quarter,
  selectedDate,
  organisation,
  referralsCount,
  supportCount,
  unreportedCaseCount,
  ethnicityCount,
  genderCount,
  sexCount,
  sexualitiesCount,
  impairmentCount,
  caseAttributeCount,
  ageCount,
  keyIssuesPara,
  emotionalImpactCS,
  outcomesCS,
  otherDetails
) => {
  const formData = {
    quarter,
    selectedDate: selectedDate.getFullYear(),
    organisation,
    referralsCount,
    supportCount,
    unreportedCaseCount,
    ethnicityCount,
    genderCount,
    sexCount,
    sexualitiesCount,
    impairmentCount,
    caseAttributeCount,
    ageCount,
    keyIssuesPara,
    emotionalImpactCS,
    outcomesCS,
    otherDetails,
  };
  postForm(formData);
};

const addOrganisation = async (name) => {
  let response;
  try {
    response = await post('/api/addDDPO', { name });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
  return response;
};

const getAllOrganisations = async () => {
  let response;
  try {
    response = await get('/api/getDDPOs');
  } catch (err) {
    console.error(err);
  }
  return response;
};

export { constructForm, addOrganisation, getAllOrganisations };
