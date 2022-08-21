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
import { WeatherContext } from './context/WeatherContext';
import { LocationContext } from './context/LocationContext';
import { UnitsContext } from './context/UnitsContext';
import Footer from './components/Footer/Footer';
function App() {
  const [weather, setWeather] = useState<any>({});
  const [location, setLocation] = useState<any>({});
  const [coords, setCoords] = useState<ICoords>({ lat: '', lon: '' });
  const [units, setUnits] = useState<string>('imperial'); // imperial or metric
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
          const weather = await getWeather(coords.lat, coords.lon, units);
          setWeather(weather.data);
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
      <WeatherContext.Provider value={weather}>
        <LocationContext.Provider value={location}>
          <UnitsContext.Provider value={units}>
            <header>
              <Navbar />
              <SubNavbar location={location} weather={weather} />
            </header>
            <BrowserRoutes />
            <Footer />
          </UnitsContext.Provider>
        </LocationContext.Provider>
      </WeatherContext.Provider>
    </>
  );
}

export default App;
