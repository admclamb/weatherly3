import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import NotFound from './NotFound/NotFound';
import SearchResults from './SearchResults/SearchResults';
type Props = {
  setLocation: (value: Location) => void;
};
const BrowserRoutes = ({ setLocation }: Props) => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/weather" element={<Landing />} />
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
