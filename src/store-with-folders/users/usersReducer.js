import { CREATE_NEW_USER, UPDATE_USER, user } from './types';

const initialState = { users: ['Ann', 'Bob'] };

// --- Basic variant
// export const usersReducer = (state = { users: null }, { payload, type }) => {
//   switch (type) {
//     case 'createNewUser':
//       return { ...state, users: payload };
//     case 'updateUser':
//       return { ...state, users: payload };
//     case 'deleteUser':
//       return { ...state, users: payload };
//     default:
//       return state;
//   }
// };

// --- initial State in default case
// export const usersReducer = (state, { payload, type }) => {
//   switch (type) {
//     case 'createNewUser':
//       return { ...state, users: payload };
//     case 'updateUser':
//       return { ...state, users: payload };
//     case 'deleteUser':
//       return { ...state, users: payload };
//     default:
//       return initialState;
//   }
// };

// --- With types const
export const usersReducer = (state, { payload, type }) => {
  switch (type) {
    case CREATE_NEW_USER:
      return { ...state, users: payload };
    case UPDATE_USER:
      return { ...state, users: payload };
    case user.DELETE:
      return { ...state, users: payload };
    default:
      return initialState;
  }
};
