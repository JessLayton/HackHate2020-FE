import Axios from 'axios';
import backEndLocation from '../local/location';

const getLocation = (path) => {
  return `${backEndLocation}${path}`;
};

const post = async (path, body, headers={}) => {
  try {
    const response = await Axios.post(getLocation(path), body, headers);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const get = async (path, headers={}) => {
  try {
    const response = await Axios.get(getLocation(path), headers);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export { post, get };
