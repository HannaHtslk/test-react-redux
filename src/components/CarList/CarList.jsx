import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { selectCars } from '../../redux/cars/slice';
import s from './CarList.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const CarList = () => {
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <div>
      <ul className={s.list}>
        {cars.map(car => {
          return (
            <li className={s.item} key={car.id}>
              <CarItem car={car} />
            </li>
          );
        })}
      </ul>
      <LoadMoreBtn />
    </div>
  );
};

export default CarList;
