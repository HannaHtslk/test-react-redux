import { Link } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Need a car? <br /> Go get it
      </h1>
      <Link to="/catalog">
        <button type="button" className={s.button}>
          Rent a car
        </button>
      </Link>
    </div>
  );
};

export default Home;
