import { Link } from 'react-router-dom';
import FavItem from '../FavItem/FavItem';
import s from './FavList.module.css';

const FavList = ({ favorites }) => {
  return (
    <div className={s.wrapper}>
      <Link className={s.link} to="/catalog">
        back to catalog
      </Link>
      <ul className={s.list}>
        {favorites.map(car => {
          return (
            <li className={s.item} key={car.id}>
              <FavItem fav={car} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavList;
