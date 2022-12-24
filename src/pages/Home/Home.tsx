import React from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { Weather } from '../../ts/types/Weather';

type Props = {
  weather: Weather;
};

const Home = ({ weather }: Props) => {
  console.log('weather: ', weather);
  if (!weather || Object.keys(weather).length < 1) {
    console.log(' no weather!');
    return <Navigate to="/weather" />;
  }
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
