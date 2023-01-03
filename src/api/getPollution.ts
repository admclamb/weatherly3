import axios from 'axios';
const { REACT_APP_OW_KEY } = process.env;

export const getPollution = (lat: number, lon: number) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${REACT_APP_OW_KEY}`
  );
};
