import { CREATE_NUMBER, DELETE_NUMBER } from './types';

export const numberReducer = (state = { number: 0 }, { payload, type }) => {
  switch (type) {
    case CREATE_NUMBER:
      return { ...state, number: payload };
    case DELETE_NUMBER:
      return { ...state, number: payload };
    default:
      return state;
  }
};
