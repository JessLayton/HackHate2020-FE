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

export {
  postForm, addOrganisation, getAllOrganisations,
  getUnreportedCasesData, getReportingDetailsData, getReferralsOverTimeData,
  getAllReferralsData,
};
