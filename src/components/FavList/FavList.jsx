import FavItem from '../FavItem/FavItem';
import s from './FavList.module.css';

const FavList = ({ favorites }) => {
  return (
    <>
      <ul className={s.list}>
        {favorites.map(car => {
          return (
            <li className={s.item} key={car.id}>
              <FavItem fav={car} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FavList;
