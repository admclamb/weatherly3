import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  active: string;
};

const NavbarPage = ({ active }: Props) => {
  const { lat = null, lon = null } = useParams();
  console.log(active);
  return (
    <ul className="flex gap-1">
      <li
        className={`py-1 ${
          active === 'home' && 'border-b-2 border-orange-500'
        }`}
      >
        <Link to={`/weather/lat/${lat}/lon/${lon}`}>Home</Link>
      </li>
      <li
        className={`py-1 ${
          active === 'hourly' && 'border-b border-orange-500'
        }`}
      >
        <Link to={`/weather/hourly/lat/${lat}/lon/${lon}`}>Hourly</Link>
      </li>
      <li
        className={`py-1 ${active === 'daily' && 'border-b border-orange-500'}`}
      >
        <Link to={`/weather/daily/lat/${lat}/lon/${lon}`}>Daily</Link>
      </li>
    </ul>
  );
};

export default NavbarPage;
