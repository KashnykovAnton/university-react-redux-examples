import { createStore } from 'redux';
import { mainReducer } from './mainReducer';

// IMPORTANT - with combineReducer function - initial state DOESN'T work!!
// Initial state for each reducer we should type separetly
// export const store = createStore(mainReducer, {number: 0, items: [], users: null});

export const store = createStore(mainReducer);

// Recomendation to use !!!
// https://rxjs.dev/
