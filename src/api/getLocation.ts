import axios, { AxiosError } from 'axios';
import { Error } from '../ts/interfaces/Error';
import { Location } from '../ts/interfaces/Location';
const { REACT_APP_OW_KEY, LIMIT } = process.env;
export const getLocation = async (lat: number, lon: number) => {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${LIMIT}&appid=${REACT_APP_OW_KEY}`
  );
};
