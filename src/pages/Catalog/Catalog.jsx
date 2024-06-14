import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';
import {
  selectCars,
  selectFilteredCars,
  selectIsLoading,
  selectLimit,
  setFilteredCars,
  setTotal,
} from '../../redux/cars/slice';
import FiltrationBar from '../../components/FiltrationBar/FiltrationBar';
import s from './Catalog.module.css';
import { selectBrand, setSelectedBrand } from '../../redux/filter/slice';

const Catalog = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);
  const selectedBrand = useSelector(selectBrand);
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = cars.filter(car => car.make === selectedBrand);
      dispatch(setFilteredCars(filtered));
      dispatch(setTotal(filtered.length));
    } else {
      dispatch(setFilteredCars(cars));
    }
  }, [selectedBrand, cars, dispatch]);

  const handleFilter = brand => {
    dispatch(setSelectedBrand(brand));
  };

  return (
    <div className={s.container}>
      <FiltrationBar onFilter={handleFilter} />
      {isLoading && <p className={s.loader}>Loading...</p>}
      <CarList cars={filteredCars} />
    </div>
  );
};

export default Catalog;
