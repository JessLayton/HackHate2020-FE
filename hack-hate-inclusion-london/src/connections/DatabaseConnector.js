import Axios from 'axios';
import backEndLocation from '../local/location';

const getLocation = (path) => `${backEndLocation}${path}`;

const post = async (path, body, headers = {}) => {
  let response;
  try {
    response = await Axios.post(getLocation(path), body, headers);
  } catch (err) {
    console.error(err);
  }
  return response;
};

const get = async (path, headers = {}) => {
  let response;
  try {
    response = await Axios.get(getLocation(path), headers);
  } catch (err) {
    console.error(err);
  }
  return response;
};

export { post, get };
