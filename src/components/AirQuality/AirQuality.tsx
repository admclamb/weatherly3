import React from 'react';
import Card from '../Card/Card';
import CircleGauge from '../CircleGauge/CircleGauge';

type Props = {};

const AirQuality = (props: Props) => {
  return (
    <Card classes="flex flex-col">
      <h4 className="text-lg font-semibold text-left">Air Quality</h4>
    </Card>
  );
};

export default AirQuality;
