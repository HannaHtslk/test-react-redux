import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: [],
  page: 1,
  limit: 12,
  total: 32,
  isLoading: false,
  isError: false,
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
  },
  extraReducers: builder => {
    builder
      .addCase(
        fetchCarsThunk.fulfilled,
        (state, { payload: { data, page, limit } }) => {
          state.page = page;
          state.limit = limit;
          state.cars = page === 1 ? data : [...state.cars, ...data];

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

export const carsReducer = carsSlice.reducer;
export const {
  selectCars,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectLimit,
  selectTotal,
} = carsSlice.selectors;
