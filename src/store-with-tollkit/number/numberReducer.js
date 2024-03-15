import { createReducer } from '@reduxjs/toolkit';
import { createNumberAction, deleteNumberAction } from './actions';

export const numberReducer = createReducer({ number: 0 }, builder => {
  builder
    .addCase(createNumberAction, (state, { payload }) => {
      return {
        ...state,
        number: payload,
      };
    })
    .addCase(deleteNumberAction, (state, { payload }) => {
      return {
        ...state,
        number: payload,
      };
    });
});
