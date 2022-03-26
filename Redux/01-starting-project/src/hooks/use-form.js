import { useState } from "react";

const useForm = ((validateFn=(()=>true))=>{
	const [enteredValue, setValue] = useState('');
	const [isValidValue, validateEnteredValue] = useState(true);
	const isBlank = ((value)=>{
		if(value.trim()===''){
			validateEnteredValue(true);
			return true;
		}
		return false;
	})
	const onChangValueHandler = ((event)=>{
		setValue(event.target.value);
		if(isBlank(enteredValue)) return;
		validateEnteredValue(validateFn(enteredValue));
	});

	const onFocusOutValueHandler = ((event)=>{
		setValue(event.target.value);
		if(isBlank(enteredValue)) return;
		validateEnteredValue(validateFn(enteredValue));
	});
	
	return {
		returnedValue:enteredValue,
		onChangValueHandler,
		onFocusOutValueHandler,
		isValidValue
	}
});

export default useForm;