import { Route, Routes } from 'react-router-dom';
import { Weather } from '../ts/types/Weather';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import NotFound from './NotFound/NotFound';
type Props = {
  weather: Weather;
};
const BrowserRoutes = ({ weather }: Props) => {
  return (
    <>
      <Routes>
        <Route index element={<Home weather={weather} />} />
        <Route path="/weather" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default BrowserRoutes;
