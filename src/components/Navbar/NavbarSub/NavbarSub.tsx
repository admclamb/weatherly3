import React from 'react';

type Props = {};

const NavbarSub = (props: Props) => {
  return (
    <nav className="flex justify-center align-center p-2 bg-neutral-700 text-white">
      <div className="container">
        <p className="text-sm">Wilmington, NC 78&deg;F</p>
      </div>
    </nav>
  );
};

export default NavbarSub;
