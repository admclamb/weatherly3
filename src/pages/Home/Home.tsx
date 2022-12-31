import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { getWeather } from '../../api/getWeather';
import { UnitsContext } from '../../context/UnitsContext';
import { WeatherContext } from '../../context/WeatherContext';
import Layout from '../../layout/Layout';
import { Weather } from '../../ts/types/Weather';

type Props = {
  weather: any;
  setWeather: (value: any) => void;
};

const Home = ((): Props) => {
  const [error, setError] = useState({});
  const [weather, setWeather] = useState({});
  const units = useContext(UnitsContext);
  const { lat = '', lon = '' } = useParams();
  useEffect(() => {
    (async () => {
      if (parseInt(lat) == 0 && parseInt(lon) == 0 || lat && lon ) {
        const response = await getWeather(+lat, +lon, units);
        setWeather(response?.data);
      }
        
    })();
    
  }, [lat, lon]);

  console.log(weather);
  return (
    <Layout>
      <h1>Home</h1>
      <p></p>
    </Layout>
  );
};

export default Home;
