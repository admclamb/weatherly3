import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className="left">
          <Link to="/" className="nav-brand">
            <h1>Weatherly</h1>
          </Link>
        </div>
        <div className="middle">
          <Searchbar color="dark" />
        </div>
        <div className="right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
