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
  const { weather = [], temp, feels_like } = currentWeather;

  return (
    <Card>
      <h4 className="text-lg font-semibold">Current Weather</h4>
      <div>
        <div>
          <div className="flex items-center">
            <p className="flex items-center">
              <FormatTemp
                temp={temp}
                fontSize={'text-6xl'}
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
      </div>
    </Card>
  );
};

export default CurrentWeather;
