import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import QuoteList from '../quotes/QuoteList'
import LoadingSpinner from '../UI/LoadingSpinner';
import NoQuotesFound from '../quotes/NoQuotesFound';
import Card from '../UI/Card';
const AllQoutes = (()=>{
	const {status, data, error, sendRequest} = useHttp(getAllQuotes, true);
	let isLoading = false;
	let hasError = false;
	useEffect(()=>{
		sendRequest();
	},[sendRequest]);
	
	if(status === 'pending'){
		isLoading = true;
		hasError = false;
	}else if(status === 'completed' && error){
		isLoading = false;
		hasError = true;
	}else if(status === 'completed' && error === null && (!data && data.length === 0)){
		isLoading = false;
		hasError = false;
	}else{
		isLoading = false;
		hasError = false;
	}
	console.log(data);
	return (
		<>
			{ isLoading && <div className='centered'><LoadingSpinner></LoadingSpinner></div>}
			{!isLoading && hasError && <Card>{error}</Card>}
			{!isLoading && !hasError && (data.length === 0) && <NoQuotesFound></NoQuotesFound>}
			{!isLoading && !hasError && (data.length > 0) &&	<QuoteList quotes={data}></QuoteList>}
		</>
	)
});

export default AllQoutes;