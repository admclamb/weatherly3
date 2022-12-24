import React, { useEffect, useState } from 'react';
import BrowserRoutes from './pages/Routes';
import { WeatherContext } from './context/WeatherContext';
import { LocationContext } from './context/LocationContext';
import { UnitsContext } from './context/UnitsContext';
import { Coordinates } from './ts/interfaces/Coordinates';
import { storage } from './utils/Storage';
const App = () => {
  const [weather, setWeather] = useState<any>({});
  const [location, setLocation] = useState<any>({});
  const [coords, setCoords] = useState<Coordinates>({ lat: null, lon: null });
  const [units, setUnits] = useState<string>('imperial'); // imperial or metric
  const [error, setError] = useState<any>(null);

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

  // create theme

  return (
    <>
      <WeatherContext.Provider value={weather}>
        <LocationContext.Provider value={location}>
          <UnitsContext.Provider value={units}>
            <BrowserRoutes weather={weather} />
          </UnitsContext.Provider>
        </LocationContext.Provider>
      </WeatherContext.Provider>
    </>
  );
};

export default App;
