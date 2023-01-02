import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavbarSub from '../components/Navbar/NavbarSub/NavbarSub';
import { Weather } from '../ts/types/Weather';

type Props = {
  children?: React.ReactNode;
  weather: Weather;
  classes: string;
};

const Layout = ({ children, weather, classes }: Props) => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarSub weather={weather} />
      </header>
      <main className={classes}>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  classes: '',
};

export default Layout;
