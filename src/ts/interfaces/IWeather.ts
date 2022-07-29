import { ICurrentWeather } from './ICurrentWeather';
import { IDailyForecast } from './IDailyForecast';
import { IHourlyForecast } from './IHourlyForecast';
import { IMinuteForecast } from './IMinuteForecast';
import { IWeatherAlert } from './IWeatherAlert';

export interface IWeather {
  lat: number;
  lon: number;
  timezone: Date;
  timezone_offset: Date;
  current?: ICurrentWeather;
  minutely?: IMinuteForecast;
  hourly?: IHourlyForecast;
  daily?: IDailyForecast;
  alerts?: IWeatherAlert;
}
