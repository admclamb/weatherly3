import React, { useEffect, useState } from 'react';
import { getPollution } from '../../api/getPollution';
import { Location } from '../../ts/types/Location';
import Card from '../Card/Card';
import CircleGauge from '../CircleGauge/CircleGauge';

type Props = {
  location: Location;
};

const AirQuality = ({ location }: Props) => {
  const [airPollution, setAirPollution] = useState({});
  useEffect(() => {
    if (Array.isArray(location) && location.length > 0) {
      const { lat, lon } = location[0];
      if ((lat === 0 && lon === 0) || (lat && lon)) {
        (async () => {
          const response = await getPollution(lat, lon);
          setAirPollution(response?.data[0]);
        })();
      }
    }
  }, [location]);
  console.log('air pollution: ', airPollution);

  const qualities = {
    1: { description: 'Good', color: 'text-success' },
    2: { description: 'Fair', color: 'text-info' },
    3: { description: 'Poor', color: 'text-warning' },
    4: { description: 'Very Poor', color: 'text-danger' },
  };

  return (
    airPollution &&
    Object.keys(airPollution).length > 0 && (
      <Card classes="flex flex-col">
        <h4 className="text-lg font-semibold text-left">Air Quality</h4>
      </Card>
    )
  );
};

export default AirQuality;
