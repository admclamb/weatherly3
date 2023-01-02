import React from 'react';
import { Location } from '../../ts/types/Location';
import { WeatherCurrent } from '../../ts/types/WeatherCurrent';
import FormatTemp from '../FormatTemp/FormatTemp';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
type Props = {
  currentWeather: WeatherCurrent;
  location: Location;
};

const CurrentWeather = ({ currentWeather, location }: Props) => {
  if (!currentWeather) {
    return null;
  }
  const {
    weather = [],
    temp,
    feels_like,
    wind_speed,
    humidity,
  } = currentWeather;
  const { name, state } = location;
  console.log('===============>', location);
  return (
    <Card>
      <h4 className="text-lg font-semibold">Current Weather</h4>
      {location && location?.name && location?.state && (
        <p>
          {name}, {state}
        </p>
      )}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center">
            <p className="flex items-center">
              <FormatTemp
                temp={temp}
                fontSize={'text-5xl'}
                fontWeight={'font-bold'}
              />
            </p>
            <Icon
              icon={weather[0]?.icon}
              description={weather[0].description}
            />
          </div>

          <p>
            feels like <FormatTemp temp={feels_like} />
          </p>
        </div>
        <div className="pt-2 flex flex-col items-end">
          <p className="text-xl font-bold">{weather[0]?.description}</p>
          {humidity && <p className="text-sm">Humidity: {humidity}%</p>}
          {wind_speed && <p className="text-sm">Wind Speed: {wind_speed}MPH</p>}
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
