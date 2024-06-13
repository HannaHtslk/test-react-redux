import { useEffect } from 'react';
import CarList from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsThunk } from '../../redux/cars/operations';
import { selectLimit } from '../../redux/cars/slice';

const Catalog = () => {
  const dispatch = useDispatch();
  const limit = useSelector(selectLimit);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, limit }));
  }, [dispatch, limit]);

  return (
    <>
      <CarList />
    </>
  );
};

export default Catalog;
