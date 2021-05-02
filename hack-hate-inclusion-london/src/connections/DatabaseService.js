import { post, get } from './DatabaseConnector';

const postForm = async (formData) => {
  let success;
  try {
    const response = await post('/api/form', formData);
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
    response = await post('/api/addDDPO', { name });
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

export { postForm, addOrganisation, getAllOrganisations };
