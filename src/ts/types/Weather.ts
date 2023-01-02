import { WeatherCurrent } from './WeatherCurrent';
import { WeatherHourly } from './WeatherHourly';

export type Weather = {
  current: WeatherCurrent;
  hourly: WeatherHourly;
};
