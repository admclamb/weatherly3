import axios from 'axios';
import { IWeather } from '../ts/interfaces/IWeather';

export const getWeather = async (
  lat: string,
  lon: string,
  units: string
): Promise<any> => {
  const { REACT_APP_OW_KEY } = process.env;
  const response = await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${REACT_APP_OW_KEY}`
    )
    .catch((err) => console.log(err));
  return response;
};
