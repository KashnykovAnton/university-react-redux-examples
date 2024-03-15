import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: { number: 0 },
  reducers: {
    createNumber: (state, { payload }) => {
      return {
        ...state,
        number: payload,
      };
    },
    deleteNumber: (state, { payload }) => {
      return {
        ...state,
        number: payload,
      };
    },
  },
});

export const numberSliceReducer = numberSlice.reducer;
export const { createNumber, deleteNumber } = numberSlice.actions;
