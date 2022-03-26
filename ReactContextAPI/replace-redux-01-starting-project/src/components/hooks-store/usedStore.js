import {useState, useEffect} from 'react';
let globalState = {};
let listener = [];
let actions = {};

const UsedStore = ((shouldListen = true)=>{
	const setState = useState(globalState)[1];
	const dispatch = ((actionsIndentifier, payload)=>{
		const newState = actions[actionsIndentifier](globalState, payload);
		globalState = {...globalState, ...newState};
		for (const listenerEvent of listener) {
			listenerEvent(newState);
		}
	});
	useEffect(()=>{
		if(shouldListen){
			listener.push(setState);
		}
		return ((shouldListen)=>{
			if(shouldListen){
				listener = listener.filter((value)=>value!==setState);
			}
		})
	},[setState, shouldListen])

	return [globalState, dispatch];
});

export default UsedStore;

export const initStore = (userActions, initialState)=>{
	if(initialState){
		globalState = {...globalState, ...initialState};
	}

	actions = {...actions, ...userActions};
};


