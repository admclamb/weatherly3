import React, { useContext, useState } from 'react';
import { UnitsContext } from '../../../context/UnitsContext';
import { WeatherContext } from '../../../context/WeatherContext';
import { formatHoursFromHourly } from '../../../utils/formatTime';
import Card from '../../Card/Card';
import WeatherChart from '../../charts/WeatherChart/WeatherChart';
import styles from './HomeWidget.module.css';

const HomeWidget = () => {
  const [currentHour, setCurrentHour] = useState(0);
  const weather = useContext(WeatherContext);
  const units = useContext(UnitsContext);
  const { hourly } = weather;
  console.log('hourly: ', hourly);
  return (
    hourly && (
      <Card>
        <header className={styles.header}>
          <img
            src={`http://openweathermap.org/img/wn/${hourly[currentHour].weather[currentHour].icon}@2x.png`}
            alt={hourly[currentHour].weather[currentHour].main}
          />
          <h2 className={styles.temp}>{hourly[currentHour].temp.toFixed(0)}</h2>
          <p className={styles.units}>{units === 'imperial' ? 'F' : 'C'}</p>
          <ul className={`${styles.ul} ${styles.left} text-gray`}>
            <li>Percipitation: {hourly[currentHour].pop * 100}%</li>
            <li>Humidity: {hourly[currentHour].humidity}%</li>
            <li>
              Wind: {hourly[currentHour].wind_speed}
              {units === 'imperial' ? 'm/h' : 'm/s'}
            </li>
          </ul>
          <ul className={`${styles.ul} ${styles.right}`}>
            <h4 className={styles.location}>Wilmington, NC 28405</h4>
            <p className="text-gray">Sunday 3:00 PM</p>
            <p className="text-gray">
              {hourly[currentHour].weather[currentHour].description}
            </p>
          </ul>
        </header>
        <ul className="nav"></ul>
        <WeatherChart
          weatherDatum={formatHoursFromHourly(hourly)}
          xName={'newDt'}
          yName={'temp'}
        />
      </Card>
    )
  );
};

export default HomeWidget;
