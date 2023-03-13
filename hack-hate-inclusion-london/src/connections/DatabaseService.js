import { post, get } from './DatabaseConnector';

const postForm = async (formData) => {
  let success;
  try {
    const response = await post('/api/form/create', formData);
    success = response && response.data;
  } catch (err) {
    console.error(err);
    success = false;
  }
  return success;
};

const getUserSubmissions = async () => {
  let response;
  try {
    response = await get('/api/form/submissions');
  } catch (err) {
    console.error(err);
  }
  return response;
};

const addOrganisation = async (name) => {
  let response;
  try {
    response = await post('/api/ddpo/addDDPO', { name });
  } catch (err) {
    console.error(err);
  }
  return response;
};

const getAllOrganisations = async () => {
  let response;
  try {
    response = await get('/api/ddpo/getDDPOs');
  } catch (err) {
    console.error(err);
  }
  return response;
};

const getUnreportedCasesData = async () => {
  let response;
  try {
    response = await get('/api/dash/reasons');
  } catch (err) {
    console.error(err);
  }
  return response.data;
};

const getReportingDetailsData = async () => {
  let response;
  try {
    response = await get('/api/dash/reportingDetails');
  } catch (err) {
    console.error(err);
  }
  return response.data;
};

const getReferralsOverTimeData = async () => {
  let response;
  try {
    response = await get('/api/dash/referralsOverTime');
  } catch (err) {
    console.error(err);
  }
  return response.data;
};

const getAllReferralsData = async () => {
  let response;
  try {
    response = await get('/api/dash/allReferrals');
  } catch (err) {
    console.error(err);
  }
  return response.data;
};

const getIntersectionalData = async () => {
  let response;
  try {
    response = await get('/api/dash/intersectionalHateCrime');
  } catch (err) {
    console.error(err);
  }
  return response?.data;
};

const getSupportProvidedData = async () => {
  let response;
  try {
    response = await get('/api/dash/supportProvided');
  } catch (err) {
    console.error(err);
  }
  return response?.data;
};

export {
  postForm, getUserSubmissions, addOrganisation, getAllOrganisations,
  getUnreportedCasesData, getReportingDetailsData, getReferralsOverTimeData,
  getAllReferralsData, getIntersectionalData, getSupportProvidedData,
};
