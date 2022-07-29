import React from 'react';
import styles from './Searchbar.module.css';
type Props = {
  color: string;
};

const Searchbar = (props: Props) => {
  const { color } = props;
  return (
    <form
      id="searchbarForm"
      className={`${styles.form} ${
        color === 'light' ? styles.light : styles.dark
      }`}
    >
      <input
        className={`${styles.input} ${
          color === 'light' ? styles.lightInput : styles.darkInput
        }`}
        type="text"
      />
      <button className={styles.submit}>
        <i className="fa-regular fa-magnifying-glass fa-lg"></i>
      </button>
    </form>
  );
};

Searchbar.defaultProps = {
  color: 'light',
};

export default Searchbar;
