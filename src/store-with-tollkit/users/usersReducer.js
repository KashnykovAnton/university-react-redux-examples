import { createReducer } from '@reduxjs/toolkit';
import {
  createUserAction,
  deleteUserAction,
  updateUserAction,
} from './actions';
// import { CREATE_NEW_USER, UPDATE_USER, DELETE_USER } from './types';

const initialState = { users: ['Ann', 'Bob'] };

// --- OLD example with types constants
// export const usersReducer = createReducer(initialState, {
//   [CREATE_NEW_USER]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
//   [UPDATE_USER]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
//   [DELETE_USER]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
// });

// --- OLD example with action functions
// export const usersReducer = createReducer(initialState, {
//   [createUserAction]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
//   [updateUserAction]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
//   [deleteUserAction]: (state, { payload }) => {
//     return { ...state, users: payload };
//   },
// });

// --- Modern example with builder !!!
export const usersReducer = createReducer(initialState, builder => {
  builder
    .addCase(createUserAction, (state, { payload }) => {
      return {
        ...state,
        users: payload,
      };
    })
    .addCase(updateUserAction, (state, { payload }) => {
      return {
        ...state,
        users: payload,
      };
    })
    .addCase(deleteUserAction, (state, { payload }) => {
      return {
        ...state,
        users: payload,
      };
    });
});
