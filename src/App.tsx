import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import BrowserRoutes from './pages/Routes';
import { IWeather } from './ts/interfaces/IWeather';
import { ILocation } from './ts/interfaces/ILocation';
import { storage } from './utils/Storage';
import { IError } from './ts/interfaces/IError';
import { getWeather } from './api/getWeather';
import { getLocation } from './api/getLocation';
import { getCoordinates } from './api/getCoordinates';
function App() {
  const [weather, setWeather] = useState<IWeather | {}>({});
  const [location, setLocation] = useState<ILocation>({ lat: null, lon: null });
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const localWeather: IWeather | null = storage.get('weather');
    const localLocation: ILocation | null = storage.get('location');
    if (localWeather) {
      setWeather(localWeather);
    }
    if (localLocation) {
      setLocation(localLocation);
    }
    if (!location.lat || !location.lon) {
      (async () => {
        setError(null);
        try {
          const coords = await getCoordinates();
          const { lat, lon } = coords;
          const location = await getLocation(lat, lon);
          setLocation(location);
        } catch (error) {
          setError(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    setError(null);
    (async () => {
      try {
        if (location.lat && location.lon) {
          const { lat, lon } = location;
          const weather = await getWeather(lat, lon);
        } else {
          throw { message: 'Location is unavailable' };
        }
      } catch (error) {
        setError(error);
      }
    })();
  }, [location]);

  return (
    <>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
      <BrowserRoutes />
    </>
  );
}

export default App;
