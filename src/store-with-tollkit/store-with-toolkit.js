import { configureStore } from '@reduxjs/toolkit';

// import { mainReducer } from './mainReducer';

// export const store = configureStore({
//     reducer: mainReducer
// });

// --- It's better to name mainReducer as "reducer"
// With this name the code will be better written
import { reducer } from './reducer';

export const store = configureStore({
  reducer,
});
