import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SubNavbar from './components/SubNavbar/SubNavbar';
import BrowserRoutes from './pages/Routes';

function App() {
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
