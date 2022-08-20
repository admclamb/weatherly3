import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Navbar.module.css';
const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <section className="container">
        <div className="container__left">
          <Link to="/" className="nav-brand">
            <h1>Weatherly</h1>
          </Link>
        </div>
        <div className="container__middle">
          <Searchbar color="dark" />
        </div>
        <div className="container__right">
          <div
            className={`burger-menu ${isBurgerOpen ? 'opened' : ''}`}
            data-toggle="collapse"
            data-target="#navContent"
            onClick={() => setIsBurgerOpen((curr) => !curr)}
          >
            <div className="burger"></div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
