import { post, get } from './DatabaseConnector';

const addOrganisation = (name) => {
  try {
    const response = await post('/ddpo', { name });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

const getAllOrganisations = () => {
  try {
    const response = await get('/ddpo');
  } catch (err) {
    console.error(err);
  }
};

export { addOrganisation, getAllOrganisations };
