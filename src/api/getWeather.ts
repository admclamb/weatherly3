import axios from 'axios';

export const getWeather = async (lat: string, lon: string) => {
  const { REACT_APP_OW_KEY } = process.env;
  const response = await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${REACT_APP_OW_KEY}`
    )
    .catch((err) => console.log(err));
  return response;
};
