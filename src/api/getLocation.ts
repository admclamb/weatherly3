import axios, { AxiosError } from 'axios';
import { IError } from '../ts/interfaces/IError';
import { ILocation } from '../ts/interfaces/ILocation';
const { REACT_APP_OW_KEY, LIMIT } = process.env;
export const getLocation = (lat: number, lon: number) => {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${LIMIT}&appid=${REACT_APP_OW_KEY}`
  );
};
