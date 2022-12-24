import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavbarSub from '../components/Navbar/NavbarSub/NavbarSub';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarSub />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
