import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

const BrowserRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default BrowserRoutes;
