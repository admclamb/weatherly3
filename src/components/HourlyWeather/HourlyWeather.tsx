import React from 'react';
import { Location } from '../../ts/types/Location';
import { WeatherHourly } from '../../ts/types/WeatherHourly';
import Card from '../Card/Card';
import FormatTemp from '../FormatTemp/FormatTemp';
import Icon from '../Icon/Icon';
import { unixToHours } from '../../utils/formatTime';

type Props = {
  hourlyWeather: WeatherHourly;
  location: Location;
};

const HourlyWeather = ({ hourlyWeather, location }: Props) => {
  const hourlyWeatherArr =
    Array.isArray(hourlyWeather) &&
    hourlyWeather.map((hour) => {
      const { temp, dt, weather = [] } = hour;

      return (
        <Card classes="flex flex-col items-center" border="" borderRadius="">
          <p>{unixToHours(dt)}</p>
          <Icon icon={weather[0]?.icon} description={weather[0].description} />
          <p>
            <FormatTemp temp={temp} />
          </p>
        </Card>
      );
    });
  return (
    hourlyWeatherArr &&
    hourlyWeatherArr.length > 0 && (
      <Card classes="flex overflow-hidden">{hourlyWeatherArr}</Card>
    )
  );
};

export default HourlyWeather;
