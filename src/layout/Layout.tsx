import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import NavbarSub from '../components/Navbar/NavbarSub/NavbarSub';
import { Location } from '../ts/types/Location';
import { Weather } from '../ts/types/Weather';

type Props = {
  children?: React.ReactNode;
  weather: Weather;
  classes: string;
  location: Location;
};

const Layout = ({ children, weather, classes, location }: Props) => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarSub weather={weather} location={location} />
      </header>
      <main className={classes}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  classes: '',
};

export default Layout;
