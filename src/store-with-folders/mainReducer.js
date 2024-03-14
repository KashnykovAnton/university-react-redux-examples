import { combineReducers } from 'redux';
import { usersReducer } from './users/usersReducer';
import { itemsReducer } from './items/itemsReducer';
import { numberReducer } from './number/numberReducer';

export const mainReducer = combineReducers({
  users: usersReducer,
  items: itemsReducer,
  number: numberReducer,
});
