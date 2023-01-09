import { Route, Routes } from 'react-router-dom';
import Daily from './Daily/Daily';
import Home from './Home/Home';
import Hourly from './Hourly/Hourly';
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
        <Route path="/weather/hourly/lat/:lat/lon/:lon" element={<Hourly />} />
        <Route path="/weather/daily/lat/:lat/lon/:lon" element={<Daily />} />
        <Route path="/weather/lat/:lat/lon/:lon" element={<Home />} />
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
