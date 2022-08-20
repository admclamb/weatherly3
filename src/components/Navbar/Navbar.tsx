import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className="container__left">
          <Link to="/" className="nav-brand">
            <h1>Weatherly</h1>
          </Link>
        </div>
        <div className="container__middle">
          <Searchbar color="dark" />
        </div>
        <div className="container__right"></div>
        <div className="hamburger">
          <div className="burger"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
