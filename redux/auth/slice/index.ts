import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISignUpRequest } from '../models/ISignUpRequest';
import { REDUX_STATUS } from '@/libs/constant';
import { signUp } from '../service';
import { ISignUpResponse } from '../models/ISignUpResponse';

interface SignUpRequestType {
  createStatus: boolean;
  error: any;
  status: REDUX_STATUS;
  signUpResponse: ISignUpResponse;
}

const initialState: SignUpRequestType = {
  createStatus: false,
  error: null,
  status: REDUX_STATUS.Idle,
  signUpResponse: {} as ISignUpResponse,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.error = null;
      state.status = REDUX_STATUS.Idle;
      state.createStatus = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = REDUX_STATUS.Idle;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
        state.createStatus = true;
        state.status = REDUX_STATUS.Fulfilled;
        state.signUpResponse = action.payload;
      })
      .addCase(signUp.rejected, (state, action: PayloadAction<any>) => {
        state.status = REDUX_STATUS.Rejected;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = signUpSlice.actions;
export default signUpSlice.reducer;
