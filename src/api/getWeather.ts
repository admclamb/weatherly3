import axios from 'axios';
const { REACT_APP_OW_KEY } = process.env;
export const getWeather = async (
  lat: number,
  lon: number,
  units: string
): Promise<any> => {
  const response = await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${REACT_APP_OW_KEY}`
    )
    .catch((err) => console.log(err));
  return response;
};
