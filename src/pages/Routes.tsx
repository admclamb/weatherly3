import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import NotFound from './NotFound/NotFound';
import SearchResults from './SearchResults/SearchResults';
type Props = {
  setLocation: (value: Location) => void;
  weather: any;
  setWeather: (value: any) => void;
};
const BrowserRoutes = ({ setLocation, weather, setWeather }: Props) => {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route
          path="/weather/:lat/:lon"
          element={<Home weather={weather} setWeather={setWeather} />}
        />
        <Route
          path="/search-results"
          element={<SearchResults setLocation={setLocation} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default BrowserRoutes;
