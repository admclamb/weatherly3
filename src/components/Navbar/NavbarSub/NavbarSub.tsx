import React from 'react';
import { Location } from '../../../ts/types/Location';
import { Weather } from '../../../ts/types/Weather';
import { stateAbbreviation } from '../../../utils/formatLocation';
import FormatTemp from '../../FormatTemp/FormatTemp';

type Props = {
  weather: Weather;
  location: Location;
};

const NavbarSub = ({ weather, location }: Props) => {
  console.log(weather);
  console.log(location);
  return (
    weather?.current?.temp &&
    Array.isArray(location) &&
    location[0]?.name &&
    location[0]?.state && (
      <nav className="flex justify-center align-center p-2 bg-neutral-700 text-white">
        <div className="container">
          <p className="text-sm">
            {`${location[0]?.name}, ${stateAbbreviation(location[0]?.state)}`}{' '}
            <FormatTemp temp={weather?.current?.temp} />
          </p>
        </div>
      </nav>
    )
  );
};

export default NavbarSub;
