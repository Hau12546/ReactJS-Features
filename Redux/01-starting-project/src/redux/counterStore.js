import {
	configureStore
} from '@reduxjs/toolkit';
import {
	useState
} from 'react';
import counterSlice from './reducer/counterReducer';
import AuthSlice from './reducer/authReducer';
const redux = require('redux')

// export const counterActionType = {
// 	increment: 'increment',
// 	decrement: 'decrement',
// 	increaseByFive: 'increaseByFive',
// 	toggle: 'toggle',
// }

// const counterReducer = ((state, action) => {
// 	switch (action.type) {
// 		case counterActionType.increment: {
// 			return {
// 				...state,
// 				counter: state.counter + 1
// 			};
// 		}
// 		case counterActionType.decrement: {
// 			return {
// 				...state,
// 				counter: state.counter - 1
// 			};
// 		}
// 		case counterActionType.increaseByFive: {
// 			return {
// 				...state,
// 				counter: state.counter + action.payload
// 			}
// 		}
// 		case counterActionType.toggle: {
// 			return {
// 				...state,
// 				showCounter: !state.showCounter,
// 			}
// 		}
// 		default: {
// 			return {
// 				...state,
// 			};
// 		}
// 	}
// });

// const counterStore = redux.createStore(counterReducer,initialState);

// const getCounterState = (()=>{
// 	return counterStore.getState().counter;
// });

// counterStore.subscribe(getCounterState);

const counterStore = configureStore({
	reducer: {counter:counterSlice.reducer, auth:AuthSlice.reducer}
});

export const counterAction = counterSlice.actions;
export const authAction = AuthSlice.actions;

export default counterStore;


