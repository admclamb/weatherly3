import axios from 'axios';
import { parseLocation } from '../utils/parseLocation';
const { REACT_APP_OW_KEY, LIMIT = 5 } = process.env;
export const getGeocoding = async (location: string, signal) => {
  const {
    city = '',
    stateCode = '',
    countryCode = '',
  } = parseLocation(location);
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=${LIMIT}&appid=${REACT_APP_OW_KEY}`;
  return axios.get(url, signal);
};
