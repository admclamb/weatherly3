import { useContext } from 'react';
import HomeWidget from '../../components/widgets/HomeWidget/HomeWidget';
import { WeatherContext } from '../../context/WeatherContext';
import styles from './Home.module.css';
const Home = () => {
  return (
    <main>
      <div className="container">
        <section className={styles.main}>
          <HomeWidget />
        </section>
        <aside className={styles.aside}> </aside>
      </div>
    </main>
  );
};

export default Home;
