/*
  takes in hourly weather data and returns the dt (time) property to 
  readable human time ex: { dt: '8:00pm' }
*/
export function formatHoursFromHourly(hourly: any[]) {
  return hourly.map((hour) => {
    const newDt = unixToHours(hour.dt);
    hour.newDt = newDt;
    return hour;
  });
}

/*
 takes in unix time and return in the format hh:mm pm/am
*/
export function unixToHours(unixTime: number, justHours = false) {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  hours = hours === 0 ? 12 : hours;
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'pm' : 'am';
  hours = amOrPm === 'pm' ? hours % 12 : hours;
  const time = hours + ':' + (minutes < 9 ? '00' : minutes) + amOrPm;
  return justHours ? hours + amOrPm : time;
}

/*
 takes in unix time and return in the format day
*/
export function unixToDay(
  unixTime: number,
  shorten: boolean = false,
  isLowerCase: boolean = false
) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[new Date(unixTime * 1000).getDay()];
  day = shorten ? day.substring(0, 3) : day;
  return isLowerCase ? day.toLowerCase() : day;
}
