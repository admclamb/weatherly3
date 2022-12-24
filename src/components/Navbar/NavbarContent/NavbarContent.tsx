import React from 'react';
import Searchbar from '../../Searchbar/Searchbar';

type Props = {};

const NavbarContent = (props: Props) => {
  return (
    <ul>
      <li>
        <Searchbar />
      </li>
    </ul>
  );
};

export default NavbarContent;
