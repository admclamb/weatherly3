import React, { useEffect, useState } from 'react';
import BrowserRoutes from './pages/Routes';
import { WeatherContext } from './context/WeatherContext';
import { LocationContext } from './context/LocationContext';
import { UnitsContext } from './context/UnitsContext';
import { GetCoordsContext } from './context/GetCoordsContext';
import { Coordinates } from './ts/interfaces/Coordinates';
import { storage } from './utils/Storage';
import { getCoordinates } from './api/getCoordinates';
import { Location } from './ts/types/Location';
import { getWeather } from './api/getWeather';
import { useNavigate } from 'react-router-dom';
const App = () => {
  const [weather, setWeather] = useState<any>({});
  const [location, setLocation] = useState<Location>({
    name: '',
    lat: null,
    lon: null,
    country: '',
  });
  const [coords, setCoords] = useState<Coordinates>({ lat: null, lon: null });
  const [units, setUnits] = useState<string>('imperial'); // imperial or metric
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  // get coords
  useEffect(() => {
    // check if coords are saved in local storage
    const foundLat: string | null = storage.get('lat');
    const foundLon: string | null = storage.get('lon');
    if (foundLat && foundLon) {
      setCoords({ lat: Number(foundLat), lon: Number(foundLon) });
    } else {
    }
  }, []);

  useEffect(() => {}, [location]);

  console.log(location);

  return (
    <>
      <WeatherContext.Provider value={weather}>
        <LocationContext.Provider value={{ location, setLocation }}>
          <UnitsContext.Provider value={{ units, setUnits }}>
            <BrowserRoutes
              setLocation={setLocation}
              weather={weather}
              setWeather={setWeather}
            />
          </UnitsContext.Provider>
        </LocationContext.Provider>
      </WeatherContext.Provider>
    </>
  );
};

export default App;
