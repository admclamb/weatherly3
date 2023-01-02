import React from 'react';
import { WeatherDaily } from '../../ts/types/WeatherDaily';
import FormatTemp from '../FormatTemp/FormatTemp';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { unixToDay } from '../../utils/formatTime';
type Props = {
  dailyWeather: WeatherDaily;
  location: Location;
};

const DailyWeather = ({ dailyWeather, location }: Props) => {
  const dailyWeatherArr =
    Array.isArray(dailyWeather) &&
    dailyWeather.map((day) => {
      const {
        temp: { max, min },
        weather = [],
        dt,
      } = day;

      return (
        <Card
          classes="flex flex-col items-center"
          border=""
          borderRadius=""
          key={dt}
        >
          <p>{unixToDay(dt, true)}</p>
          <Icon icon={weather[0]?.icon} description={weather[0].description} />
          <p className="text-sm">
            <FormatTemp temp={max} fontWeight="font-bold" />
            <FormatTemp temp={min} />
          </p>
        </Card>
      );
    });
  return (
    dailyWeatherArr &&
    dailyWeatherArr.length > 0 && (
      <Card classes="flex flex-col items-start">
        <h4 className="text-lg font-bold">Daily</h4>
        <div className="flex overflow-hidden w-full">{dailyWeatherArr}</div>
      </Card>
    )
  );
};

export default DailyWeather;
