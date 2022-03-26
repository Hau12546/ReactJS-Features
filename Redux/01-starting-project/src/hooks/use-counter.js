import { useState } from 'react';

const redux = require('redux')
const initialState = {
	counter: 0
}
const counterActionType = {
	increment: 'increment',
	decrement: 'decrement',
}

const counterReducer = ((state, action) => {
	switch (action.type) {
		case counterActionType.increment: {
			return {
				...state,
				counter: state.counter + 1
			};
		}
		case counterActionType.decrement: {
			return {
				...state,
				counter: state.counter - 1
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
});
const useCounter = (() => {
	const counterStore = redux.createStore(counterReducer,initialState);
	const getPreState = (()=>{
		return counterStore.getState().counter;
	});
	const [counter, setCounter] = useState(getPreState().counter);
	const increaseCounter = (() => {
		counterStore.dispatch({
			type: counterActionType.increment
		})
	});

	const decreaseCounter = (() => {
		counterStore.dispatch({
			type: counterActionType.decrement
		})
	});

	const getCounterState = (()=>{
		setCounter(counterStore.getState().counter);
	});

	counterStore.subscribe(getPreState);
	counterStore.subscribe(getCounterState);

	return {
		counter,
		increaseCounter,
		decreaseCounter
	}
});

export default useCounter;