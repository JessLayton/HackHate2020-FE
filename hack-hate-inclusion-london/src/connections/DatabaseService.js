import { post, get } from './DatabaseConnector';

const postForm = async (formData) => {
  let success;
  try {
    const response = await post('/api/form', { formData });
    console.log(response);
    console.log(formData);
    success = response && response.data && response.data.status === 'success';
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
  return response.data.data;
};

export { postForm, addOrganisation, getAllOrganisations };
