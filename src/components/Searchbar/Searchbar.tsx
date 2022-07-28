import React from 'react';
import styles from './Searchbar.module.css';
type Props = {
  color: string;
};

const Searchbar = (props: Props) => {
  const { color } = props;
  return (
    <form
      className={`${styles.form} ${
        color === 'light' ? styles.light : styles.dark
      }`}
    >
      <input className={styles.input} />
      <button className={styles.submit}>X</button>
    </form>
  );
};

Searchbar.defaultProps = {
  color: 'light',
};

export default Searchbar;
