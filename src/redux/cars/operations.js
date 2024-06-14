import { createAsyncThunk } from '@reduxjs/toolkit';
import advertApi from '../../config/advertApi';

export const fetchCarsThunk = createAsyncThunk(
  'cars / fetchAll',
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const { data } = await advertApi.get('/advert', {
        params: { page, limit },
      });


      return { data, page, limit };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
