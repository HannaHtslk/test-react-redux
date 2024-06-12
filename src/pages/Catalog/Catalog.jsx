import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <>
      <CarList />
    </>
  );
};

export default Catalog;
