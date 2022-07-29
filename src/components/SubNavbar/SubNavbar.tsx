import React from 'react';
import styles from './SubNavbar.module.css';
type Props = {};

const SubNavbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className="container">
        <p className="p-lg">Raleigh, NC, 74</p>
      </div>
    </div>
  );
};

export default SubNavbar;
