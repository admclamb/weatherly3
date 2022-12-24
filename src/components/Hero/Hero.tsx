import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Hero.module.css';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      className={`${styles.hero} flex flex-col items-center pt-7 text-white`}
    >
      <h2 className="text-2xl mb-4">Search Your City</h2>
      <div className="w-64">
        <Searchbar />
      </div>
    </section>
  );
};

export default Hero;
