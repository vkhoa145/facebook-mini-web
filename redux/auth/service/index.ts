import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApiInstance } from '@/libs/interceptor';
import { API_VERSION } from '@/libs/constant';
import { ISignUpRequest } from '../models/ISignUpRequest';
import { ISignUpResponse } from '../models/ISignUpResponse';

const path = `/api/${API_VERSION}`;

export const signUp = createAsyncThunk(
  'auth/sign-up',
  async (params: ISignUpRequest, { rejectWithValue }) => {
    try {
      const response = await axiosApiInstance.post(`${path}/auth/signup`, params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
