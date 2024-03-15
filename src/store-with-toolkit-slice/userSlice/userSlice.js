import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [
      { name: 'Ann', id: 1 },
      { name: 'Bob', id: 2 },
    ],
  },
  reducers: {
    createUser: (state, { payload }) => {
      state.users.push(payload);
    },
    updateUser: (state, { payload }) => {
      state.users = state.users.map(user => {
        console.log(user);
        if (user.id === payload.id) {
          user.name = payload.name;
        }
        return user;
      });
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
  },
});

// immer library
// RIGHT !!!
// createUser: (state, { payload }) => {
//     state.users.push(payload)
//   }

// WRONG !!!
// createUser: (state, { payload }) => {
//     return state.users.push(payload)
//   }
// in immer forbideen to use RETURN!!!

export const userSliceReducer = userSlice.reducer;
export const { createUser, updateUser, deleteUser } = userSlice.actions;
