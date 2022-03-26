import QuoteForm from'../quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import * as apiService from '../lib/api';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const NewQoutes = (()=>{
	// const [qouteList, setqouteList] = useState({});
  const routeHistory = useHistory();
  const {status, sendRequest} = useHttp(apiService.addQuote);
  useEffect((()=>{
    if(status === 'completed'){
      routeHistory.push('/qoute-list');
    }
  }),[status, routeHistory])
  const getQoutes =((value)=>{
    // if(Object.keys(value).length>0){
    //   value.id = qouteList.length;
    //   // qouteList.push(value);
    //   // setqouteList(qouteList);
    //   return;
    // }
    sendRequest(value);
  });
		return (
			<>
				<QuoteForm
        isLoading={status === 'pending'}
        onAddQuote={getQoutes}
        ></QuoteForm>
			</>
		)
});

export default NewQoutes;