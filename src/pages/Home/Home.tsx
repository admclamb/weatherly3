import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { getWeather } from '../../api/getWeather';
import { UnitsContext } from '../../context/UnitsContext';
import { WeatherContext } from '../../context/WeatherContext';
import Layout from '../../layout/Layout';
import { Weather } from '../../ts/types/Weather';
import { Location } from '../../ts/types/Location';
import { getLocation } from '../../api/getLocation';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import ErrorAlert from '../../errors/ErrorAlert';
import Card from '../../components/Card/Card';
import HourlyWeather from '../../components/HourlyWeather/HourlyWeather';
import DailyWeather from '../../components/DailyWeather/DailyWeather';
import AirQuality from '../../components/AirQuality/AirQuality';
import Loading from '../../components/Loading/Loading';
type Props = {};

const Home = ({}: Props) => {
  const [error, setError] = useState({});
  const [weather, setWeather] = useState<Weather>({});
  const [location, setLocation] = useState<Location>({
    name: '',
    lat: null,
    lon: null,
    country: '',
  });
  const units = useContext(UnitsContext);
  const { lat = null, lon = null } = useParams();
  useEffect(() => {
    (async () => {
      try {
        if (lat !== null && lon !== null) {
          const weatherResponse = await getWeather(+lat, +lon, units);
          setWeather(weatherResponse?.data);
          const locationResponse = await getLocation(+lat, +lon);
          setLocation(locationResponse?.data);
        }
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <Layout
      weather={weather}
      location={location}
      classes={'p-2 flex flex-col gap-2'}
    >
      <ErrorAlert error={error} padding={'p-2'} />
      <CurrentWeather currentWeather={weather?.current} location={location} />
      <HourlyWeather hourlyWeather={weather?.hourly} location={location} />
      <DailyWeather dailyWeather={weather?.daily} location={location} />
      <AirQuality location={location} />
    </Layout>
  );
};

export default Home;
