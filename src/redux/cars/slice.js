import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: [],
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
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
export const { selectCars, selectIsError, selectIsLoading } =
  carsSlice.selectors;
