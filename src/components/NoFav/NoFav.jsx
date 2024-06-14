import { IoHeartDislikeOutline } from 'react-icons/io5';
import s from './NoFav.module.css';
import { Link } from 'react-router-dom';

const NoFav = () => {
  return (
    <>
      <IoHeartDislikeOutline className={s.icon} />
      <div>
        <p className={s.feature}>
          Choose your favorite car in our{' '}
          <Link className={s.link} to="/catalog">
            catalog
          </Link>
        </p>
      </div>
    </>
  );
};

export default NoFav;
