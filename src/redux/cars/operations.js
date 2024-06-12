import { createAsyncThunk } from '@reduxjs/toolkit';
import advertApi from '../../config/advertApi';

export const fetchCarsThunk = createAsyncThunk(
  'cars / fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await advertApi.get('/advert');
      console.log(data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
