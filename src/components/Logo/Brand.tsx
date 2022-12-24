import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon/LogoIcon';

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link to="/weather">
      <h1 className="text-xl">
        <LogoIcon />
        <span className="text-lg ml-2">Weatherly</span>
      </h1>
    </Link>
  );
};

export default Logo;
