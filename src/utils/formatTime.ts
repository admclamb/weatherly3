import { IHourlyForecast } from '../ts/interfaces/IHourlyForecast';

/*
  takes in hourly weather data and returns the dt (time) property to 
  readable human time ex: { dt: '8:00pm' }
*/
export function formatHoursFromHourly(hourly: IHourlyForecast[]) {
  return hourly.map((hour) => {
    const newDt = unixToHours(hour.dt);
    hour.newDt = newDt;
    return hour;
  });
}

/*
 takes in unix time and return in the format hh:mm pm/am
*/
export function unixToHours(unixTime: number) {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'pm' : 'am';
  hours = amOrPm === 'pm' ? hours % 12 : hours;
  const time = hours + ':' + (minutes < 9 ? '00' : minutes) + amOrPm;
  console.log(time);
  return time;
}
