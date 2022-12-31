import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGeocoding } from '../../api/getGeocoding';
import { LocationContext } from '../../context/LocationContext';
import { Event } from '../../ts/types/Event';
import styles from './Searchbar.module.css';
import SearchbarDropdown from './SearchbarDropdown/SearchbarDropdown';
type Props = {
  setError: (value: {}) => void;
};

const Searchbar = ({ setError }: Props) => {
  const [search, setSearch] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<Boolean>(false);

  const { setLocation } = useContext(LocationContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    const abortController = new AbortController();
    event.preventDefault();
    try {
      setError({});
      const { data = [] } = await getGeocoding(search, abortController.signal);
      if (Array.isArray(data) && data.length === 1) {
        setLocation(data);
        navigate('/');
      } else {
        navigate('/search-results', { state: { search, results: data } });
      }
    } catch (error) {
      const { message } = error;
      setError(message);
    }
  };
  const onChange = ({ target: { value } }: Event) => setSearch(value);
  return (
    <div>
      <form className="relative w-full text-black" onSubmit={handleSubmit}>
        <button className={`absolute ${styles.button}`} type="submit">
          <i className="fa-regular fa-magnifying-glass "></i>
        </button>
        <input
          // onBlur={() => setIsSearchOpen(false)}
          onFocus={() => setIsSearchOpen(true)}
          type="search"
          placeholder=" Search..."
          className={`py-2 pr-9 pl-3 w-full rounded-sm border-none ${
            styles.input
          } ${isSearchOpen ? 'rounded-b-none' : ''}`}
          value={search}
          onChange={onChange}
        />
      </form>
      {isSearchOpen && <SearchbarDropdown />}
    </div>
  );
};

export default Searchbar;
