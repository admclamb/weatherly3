import React from 'react';
import Logo from '../Logo/Brand';
import Brand from '../Logo/Brand';
import Searchbar from '../Searchbar/Searchbar';
import NavbarBurger from './NavbarBurger/NavbarBurger';
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" p-2 bg-neutral-800 text-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <NavbarBurger />
      </div>
    </nav>
  );
};

export default Navbar;
