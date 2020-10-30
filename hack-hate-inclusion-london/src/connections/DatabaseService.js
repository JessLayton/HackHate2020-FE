import { post, get } from './DatabaseConnector';

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

export { addOrganisation, getAllOrganisations };
