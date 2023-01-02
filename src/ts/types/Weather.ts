import { WeatherCurrent } from './WeatherCurrent';
import { WeatherDaily } from './WeatherDaily';
import { WeatherHourly } from './WeatherHourly';

export type Weather = {
  current: WeatherCurrent;
  hourly: WeatherHourly;
  daily: WeatherDaily;
};
