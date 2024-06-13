import { useDispatch, useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import {
  selectCars,
  selectLimit,
  selectPage,
  selectTotal,
} from '../../redux/cars/slice';
import s from './CarList.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchCarsThunk } from '../../redux/cars/operations';
// import { useState } from 'react';
// import Modal from '../Modal/Modal';

const CarList = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotal);

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  const onLoadMore = () => {
    dispatch(fetchCarsThunk({ page: page + 1, limit }));
  };

  return (
    <div>
      <ul className={s.list}>
        {cars.map(car => {
          return (
            <li className={s.item} key={car.id}>
              <CarItem car={car} />
              {/* openModal={openModal} */}
            </li>
          );
        })}
      </ul>
      {/* {isOpen && <Modal onClose={closeModal} />} */}
      {cars.length > 0 && cars.length < total && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
    </div>
  );
};

export default CarList;
