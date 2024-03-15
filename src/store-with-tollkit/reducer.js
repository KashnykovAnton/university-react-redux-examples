import { usersReducer } from './users/usersReducer';
import { itemsReducer } from './items/itemsReducer';
import { numberReducer } from './number/numberReducer';

export const reducer = {
  users: usersReducer,
  items: itemsReducer,
  number: numberReducer,
};
