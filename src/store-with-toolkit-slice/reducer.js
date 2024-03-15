import { userSliceReducer } from './userSlice/userSlice';
import { numberSliceReducer } from './numberSlice/numberSlice';

export const reducer = {
  users: userSliceReducer,
  number: numberSliceReducer,
};
