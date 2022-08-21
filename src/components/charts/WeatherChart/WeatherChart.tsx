import React from 'react';
import { AreaChart } from 'recharts';

type Props = {
  weatherDatum: [];
};

const WeatherChart = (weatherDatum: Props) => {
  console.log(weatherDatum);
  // get height of chart
  if (Array.isArray(weatherDatum) && weatherDatum.length > 0) {
    return <AreaChart width={730} height={250} data={weatherDatum}></AreaChart>;
  }
  return null;
};

export default WeatherChart;
