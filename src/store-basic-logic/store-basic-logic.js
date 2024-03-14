import { createStore } from 'redux';

//
// --- Step 1 --- Basic explenation WITHOUT types
//
// const reducer = (state, action) => {
//   //   return action.number ? action.number : state;
//   return action.number
//     ? {
//         ...state,
//         number: action.number,
//       }
//     : action.users
//     ? {
//         ...state,
//         users: action.users,
//       }
//     : state;
// };

// const store = createStore(reducer, { number: 0, items: [], users: null });

// console.log('store before changes: ', store.getState());

// store.dispatch({ number: 1, type: 'changeStoreNumber' });
// store.dispatch({ users: ['Ann', 'Bob', 'Mary'], type: 'changeStoreUsers' });

// console.log('store after changes: ', store.getState());

//
// --- Step 2 --- usage with Types and Payloads
//
// const reducer = (state, { type, payload }) => {
//   return type === 'changeStoreNumber'
//     ? {
//         ...state,
//         number: payload,
//       }
//     : type === 'changeStoreUsers'
//     ? {
//         ...state,
//         users: payload,
//       }
//     : state;
// };

// const store = createStore(reducer, { number: 0, items: [], users: null });

// console.log('store before changes: ', store.getState());

// store.dispatch({ payload: 1, type: 'changeStoreNumber' });
// store.dispatch({ payload: ['Ann', 'Bob', 'Mary'], type: 'changeStoreUsers' });

// console.log('store after changes: ', store.getState());

//
// --- Step 3 --- Final code - All the logic in 15 strokes
//
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'changeStoreNumber':
      return { ...state, number: payload };
    case 'changeStoreUsers':
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, {
  number: 0,
  items: [],
  users: null,
});
