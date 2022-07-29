import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import BrowserRoutes from './pages/Routes';

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {}, []);

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
