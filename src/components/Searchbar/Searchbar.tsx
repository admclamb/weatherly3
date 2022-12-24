import React from 'react';
import styles from './Searchbar.module.css';
type Props = {};

const Searchbar = (props: Props) => {
  return (
    <form className="relative w-full">
      <button className={`absolute text-black ${styles.button}`}>
        <i className="fa-regular fa-magnifying-glass "></i>
      </button>
      <input
        type="search"
        placeholder=" Search..."
        className="py-1 px-3 w-full rounded-md border-none"
      />
    </form>
  );
};

export default Searchbar;
