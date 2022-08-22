import React from 'react';
import { ILocation } from '../../ts/interfaces/ILocation';
import { IWeather } from '../../ts/interfaces/IWeather';
import { formatState } from '../../utils/formatProperties';
import styles from './SubNavbar.module.css';
type Props = {
  location: ILocation;
  weather: IWeather;
};

const SubNavbar = ({ location, weather }: Props) => {
  return (
    <div className={styles.container}>
      <div className="container">
        <p className="p-lg">
          {location.hasOwnProperty('name') && <span>{location.name}, </span>}
          {location.hasOwnProperty('state') && (
            <span>{formatState(location.state || '')},</span>
          )}
        </p>
        {/* <p className="p-lg">Raleigh, NC, 74</p> */}
      </div>
    </div>
  );
};

export default SubNavbar;
