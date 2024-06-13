import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';
import {
  selectBrands,
  selectCars,
  selectFilteredCars,
  selectLimit,
  setFilteredCars,
  setTotal,
} from '../../redux/cars/slice';
import FiltrationBar from '../../components/FiltrationBar/FiltrationBar';
import s from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const carBrand = useSelector(selectBrands);
  const filteredCars = useSelector(selectFilteredCars);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  const handleFilter = carBrand => {
    const filtered = cars.filter(car => car.make === carBrand);
    dispatch(setFilteredCars(filtered));
    dispatch(setTotal(filtered.length));
  };
  return (
    <div className={s.container}>
      <FiltrationBar onFilter={handleFilter} carBrand={carBrand} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default Catalog;
