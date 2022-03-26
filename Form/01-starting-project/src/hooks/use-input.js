import {useState} from 'react'
const useInput = ((validateFn)=>{
	const [inputValue, setInputValue] = useState('');
	const [isTouched, validateTouchedAction] = useState(false);
	let isValidValue = validateFn(inputValue);
	let isError = !isValidValue && isTouched;
	const valueInputHandler = ((event)=>{
		setInputValue(event.target.value);
  });
	const checkTouched = ((value)=>{
			validateTouchedAction(value || false);
	});
	const valueFocusOut = (()=>{
		validateTouchedAction(validateFn(inputValue));
	});
	const resetValue = (()=>{
		setInputValue('')
	});
	return {
		value:inputValue,
		hasError:isError,
		isValidValue,
		valueInputHandler,
		valueFocusOut,
		checkTouched,
		resetValue
	}
});

export default useInput;