import React from 'react';
import { Location } from '../../ts/types/Location';
import { WeatherCurrent } from '../../ts/types/WeatherCurrent';
import { formatTemp } from '../../utils/formatTemp';
import Card from '../Card/Card';
type Props = {
  currentWeather: WeatherCurrent;
  location: Location;
};

const CurrentWeather = ({ currentWeather, location }: Props) => {
  if (!currentWeather) {
    return null;
  }
  const { weather = [], temp, feels_like } = currentWeather;

  return (
    <Card>
      <h4>Current Weather</h4>
      <div>
        <div>
          <p>{formatTemp(temp)}</p>
          <p>
            feels like <span>{formatTemp(feels_like)}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
