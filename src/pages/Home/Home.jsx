import { Link } from 'react-router-dom';
import s from './Home.module.css';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Need a car? <br /> Go get it
      </h1>
      <Link to="/catalog">
        <Button>Rent a car</Button>
      </Link>
    </div>
  );
};

export default Home;
