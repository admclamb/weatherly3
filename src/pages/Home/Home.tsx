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

  console.log(weather);
  console.log(location);
  return (
    <Layout>
      <ErrorAlert error={error} padding={'p-2'} />

      {<CurrentWeather currentWeather={weather?.current} location={location} />}
    </Layout>
  );
};

export default Home;
