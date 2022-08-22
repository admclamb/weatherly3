import React from 'react';
import {
  Area,
  AreaChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {
  weatherDatum: any[];
  xName: string;
  yName: string;
};

const WeatherChart = ({ weatherDatum, xName, yName }: Props) => {
  // format chart to recharts specifics
  if (Array.isArray(weatherDatum) && weatherDatum.length > 0) {
    return (
      <ResponsiveContainer>
        <AreaChart width={730} height={250} data={weatherDatum}>
          <XAxis dataKey={xName} />

          <Area
            type="monotone"
            dataKey={yName}
            stroke="#be593e"
            fillOpacity={1}
            fill="#eb6e4c"
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  return null;
};

export default WeatherChart;
