import React, { useContext } from 'react';
import { UnitsContext } from '../../context/UnitsContext';
import { WeatherContext } from '../../context/WeatherContext';
import Card from '../Card/Card';
import WeatherChart from '../charts/WeatherChart/WeatherChart';
import styles from './HomeWidget.module.css';

const HomeWidget = () => {
  const weather = useContext(WeatherContext);
  const units = useContext(UnitsContext);
  const { current } = weather;
  const { hourly } = weather;
  console.log(current);
  console.log(hourly);
  return (
    weather &&
    current &&
    hourly && (
      <Card>
        <header className={styles.header}>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].main}
            width="12rem"
          />
          <h2 className={styles.temp}>{current.temp.toFixed(0)}</h2>
          <p className={styles.units}>{units === 'imperial' ? 'F' : 'C'}</p>
          <ul className={`${styles.ul} ${styles.left}`}>
            <li>{hourly.pop}%</li>
            <li>{hourly.humidity}%</li>
            <li>
              {current.wind_speed}
              {units === 'imperial' ? 'm/h' : 'm/s'}
            </li>
          </ul>
          <ul className={`${styles.ul} ${styles.right}`}>
            <h4 className={styles.location}>Wilmington, NC 28405</h4>
            <p>Sunday 3:00 PM</p>
            <p>{current.weather[0].description}</p>
          </ul>
        </header>
        <ul className="nav"></ul>
        <WeatherChart weatherDatum={hourly} />
      </Card>
    )
  );
};

export default HomeWidget;
