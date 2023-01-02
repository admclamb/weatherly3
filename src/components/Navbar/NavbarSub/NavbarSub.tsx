import React, { useContext } from 'react';
import { WeatherContext } from '../../../context/WeatherContext';
import { Weather } from '../../../ts/types/Weather';

type Props = {
  weather: Weather;
};

const NavbarSub = ({ weather }: Props) => {
  return (
    weather &&
    Object.keys(weather).length > 0 && (
      <nav className="flex justify-center align-center p-2 bg-neutral-700 text-white">
        <div className="container">
          <p className="text-sm">Wilmington, NC 78&deg;F</p>
        </div>
      </nav>
    )
  );
};

export default NavbarSub;
