import { useState } from "react";

const useError = ((isError = false, err = null)=>{
	const [error, setError] = useState(null);
	if(isError){
		setError(err.message || 'Something went wrong!');
	}else{
		setError(null);
	}
	return error;
});

export default useError;