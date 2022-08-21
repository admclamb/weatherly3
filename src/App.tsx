import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import BrowserRoutes from './pages/Routes';
import { IWeather } from './ts/interfaces/IWeather';
import { ILocation } from './ts/interfaces/ILocation';
import { storage } from './utils/Storage';
import { ICoords } from './ts/interfaces/ICoords';
import { IError } from './ts/interfaces/IError';
import { getWeather } from './api/getWeather';
import { getLocation } from './api/getLocation';
import { getCoordinates } from './api/getCoordinates';
function App() {
  const [weather, setWeather] = useState<IWeather | {}>({});
  const [location, setLocation] = useState<ILocation>({});
  const [coords, setCoords] = useState<ICoords>({ lat: '', lon: '' });
  const [error, setError] = useState<any>(null);

  // Check local storage for datum on component mount
  useEffect(() => {
    setLocation(storage.get('location') || {});
    setWeather(storage.get('weather') || {});
    // if no weather or location, get new coordinates
    if (
      Object.keys(location).length === 0 ||
      Object.keys(weather).length === 0
    ) {
      setError(null);
      (async () => {
        try {
          setCoords(await getCoordinates());
        } catch (error) {
          setError(error);
        }
      })();
    }
  }, []);

  // Set storage when weather or location change
  useEffect(() => {
    if (Object.keys(weather).length > 0) {
      storage.set('weather', weather);
    }
    if (Object.keys(weather).length > 0) {
      storage.set('location', location);
    }
  }, [weather, location]);

  useEffect(() => {
    setError(null);
    (async () => {
      try {
        if (coords.lat && coords.lon) {
          const weather = await getWeather(coords.lat, coords.lon);
        } else {
          throw { message: 'Location is unavailable' };
        }
      } catch (error) {
        setError(error);
      }
    })();
  }, [coords]);

  return (
    <>
      <p>{JSON.stringify(weather)}</p>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      <BrowserRoutes />
    </>
  );
}

export default App;
