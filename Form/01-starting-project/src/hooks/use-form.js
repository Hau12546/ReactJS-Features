import { useState, useReducer } from "react";
const initialState = {
	value: undefined,
	isBlur:false
};

const inputReducer = ((state, action)=>{
	switch (action.type) {
		case 'INPUT':
			{return {value:action.value}}
		case 'BLUR':{
				return {value:action.value}
		}
		default:
			{
				return {value:undefined}
			}
	}
});

const useForm = ((validateFn=(()=>true),_)=>{
	const [inputState, dispatch] = useReducer(inputReducer,initialState)
	const [value,setValue] = useState('');
	const [isTouched, checkTouched] = useState(false);
	// const [isFocusOut, checkFocusOut] = useState('');
	let isValidValue = (validateFn(value));
	let hasError = !isValidValue && isTouched;
	const getValue = ((event)=>{
		dispatch({type:'INPUT', value:event.target.value, isBlur:false});
		setValue(event.target.value);
		// checkFocusOut(false);
	});

	const validateFocusOut = (()=>{
		dispatch({type:'BLUR', isBlur:true});
			checkTouched(true);
			// checkFocusOut(true);
	});

	const resetValue = (()=>{
		dispatch({type:'RESET', value:''});
		setValue('')
		checkTouched(false);
		// checkFocusOut(true);
	})
	return {
		value:inputState.value,
		isFocusOut:inputState.isBlur,
		isValidValue,
		hasError,
		getValue,
		validateFocusOut,
		resetValue
	}
});

export default useForm;