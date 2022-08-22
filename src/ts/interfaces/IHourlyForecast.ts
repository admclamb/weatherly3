export interface IHourlyForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  newDt?: string;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  rain: {};
  temp: number;
  uvi: number;
  visibility: number;
  weather: [];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
