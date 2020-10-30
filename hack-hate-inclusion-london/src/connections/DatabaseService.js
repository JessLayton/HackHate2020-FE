import { post, get } from './DatabaseConnector';

const postForm = async () => {
  try {
    const response = await post('/api/form');
    console.log(response);
  } catch (err) {
    console.error(err);
  }
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

export { postForm, addOrganisation, getAllOrganisations };
