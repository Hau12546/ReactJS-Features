import { useState } from "react";

const useInput = (()=>{
	const [isValidInput, setValidateInput] = useState(true);

	const onChangeValidateInput = ((event)=>{
		if(event.target.value && event.target.value.trim() !== '')
		{
			setValidateInput(true);
			return;
		}
		setValidateInput(false);
	});
	
	const onFocusOutValidateInput = ((event)=>{
		if(event.target.value && event.target.value.trim() !== '')
		{
			setValidateInput(true);
			return;
		}
		setValidateInput(false);
	});

	return {
		isValidInput,
		onChangeValidateInput,
		onFocusOutValidateInput
	}
});

export default useInput;