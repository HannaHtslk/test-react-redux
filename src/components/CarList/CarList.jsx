import { useDispatch, useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { selectLimit, selectPage, selectTotal } from '../../redux/cars/slice';
import s from './CarList.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchCarsThunk } from '../../redux/cars/operations';

const CarList = ({ cars }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  const onLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page + 1, limit }));
  };

  return (
    <>
      <ul className={s.list}>
        {cars.map(car => {
          return (
            <li className={s.item} key={car.id}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>

      {cars.length > 0 && cars.length < total && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
    </>
  );
};

export default CarList;
