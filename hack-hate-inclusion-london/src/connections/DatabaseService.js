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
  try {
    const response = await post('/ddpo', { name });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

const getAllOrganisations = async () => {
  try {
    const response = await get('/ddpo');
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

export { postForm, addOrganisation, getAllOrganisations };
