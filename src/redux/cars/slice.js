import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: [],
  filteredCars: [],
  page: 1,
  limit: 12,
  total: 32,
  isLoading: false,
  isError: false,
  carBrands: [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land Rover',
  ],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  selectors: {
    selectCars: state => state.cars,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
    selectPage: state => state.page,
    selectLimit: state => state.limit,
    selectTotal: state => state.total,
    selectFilteredCars: state => state.filteredCars,
    selectBrands: state => state.carBrands,
  },
  reducers: {
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCarsThunk.fulfilled,
        (state, { payload: { data, page, limit } }) => {
          state.page = page;
          state.limit = limit;
          state.cars = page === 1 ? data : [...state.cars, ...data];
          state.filteredCars = state.cars;
          state.isLoading = false;
        }
      )
      .addCase(fetchCarsThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.isError = payload;
        state.isLoading = false;
      });
  },
});
export const { setFilteredCars, setTotal } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
export const {
  selectCars,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectLimit,
  selectTotal,
  selectBrands,
  selectFilteredCars,
} = carsSlice.selectors;
