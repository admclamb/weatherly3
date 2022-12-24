import React, { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Hero.module.css';
type Props = {};

const Hero = ({}: Props) => {
  const [error, setError] = useState<Object>({});
  return (
    <section
      className={`${styles.hero} flex flex-col items-center pt-7 text-white`}
    >
      <h2 className="text-2xl mb-4">Search Your City</h2>
      <div className="w-72">
        <Searchbar setError={setError} />
      </div>
    </section>
  );
};

export default Hero;
