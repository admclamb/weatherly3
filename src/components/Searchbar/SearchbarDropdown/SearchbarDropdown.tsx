import React, { useState, useEffect, useContext } from 'react';
import { GetCoordsContext } from '../../../context/GetCoordsContext';
import { storage } from '../../../utils/Storage';
type Props = {};

const SearchbarDropdown = (props: Props) => {
  const [recentSearches, setRecentSearches] = useState([]);
  const getCoords = useContext(GetCoordsContext);
  useEffect(() => {
    // get recent searches from storage
    const foundSearches = storage.get('searchHistory');
    console.log('===========================>', foundSearches);
    if (foundSearches) {
      setRecentSearches(JSON.parse(foundSearches));
    }
  }, []);
  const recentSearchesList =
    Array.isArray(recentSearches) &&
    recentSearches.map((search) => {
      <li
        key={search}
        className="hover:backdrop-brightness-95 px-2 py-3 active:backdrop-brightness-90"
      >
        {search}
      </li>;
    });
  return (
    <ul className="bg-white text-black  border-orange-500 border-t-[3px] rounded-b-sm">
      <li
        className="hover:backdrop-brightness-95 px-2 py-3 active:backdrop-brightness-90"
        onClick={() => console.log('PARENT CLICKED')}
      >
        <button onClick={() => console.log('CLICKED')}>
          <i className="fa-solid fa-location-dot text-orange-500"></i> Use your
          location
        </button>
      </li>
      {recentSearchesList}
    </ul>
  );
};

export default SearchbarDropdown;
