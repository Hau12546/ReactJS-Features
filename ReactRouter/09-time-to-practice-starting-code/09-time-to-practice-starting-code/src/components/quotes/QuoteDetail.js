import { Route, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../comments/Comments";
import useHttp from "../hooks/use-http";
import HighlightedQuote from "./HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import Card from '../UI/Card';
import NoQuotesFound from "./NoQuotesFound";
import LoadingSpinner from "../UI/LoadingSpinner";
// const DUMMY_DATA = [
// 	{id:0, text:'Hello', author:'HauNT14'},
// 	{id:1, text:'Hi', author:'HauNT14'},
// ]
const QouteDetail = (()=>{
	const params = useParams();
	const {status, data, error, sendRequest} = useHttp(getSingleQuote,true);
	const routeMatch = useRouteMatch();
	useEffect(()=>{
		sendRequest(params['qouteID'])
	},[sendRequest, params]);

	if(status === 'completed' && error){
		return (<Card>{error}</Card>);
	}else if(status === 'completed' && !error && data.length === 0){
		return (<NoQuotesFound></NoQuotesFound>);
	}else if(status === 'pending') {
		return (<div className="centered"><LoadingSpinner></LoadingSpinner></div>);
	}
	// const targetQoute = DUMMY_DATA.find((value)=>value.id === params.qouteID);
	return (
		<>
		<h1>Detail Page</h1>
		<HighlightedQuote text={data.text} author={data.author}></HighlightedQuote>
		<Route path={routeMatch['path']} exact>
			<Link to={`${routeMatch['url']}/comment`} className='centered'>Load Comments</Link>
		</Route>
		<Route path={`${routeMatch['path']}/comment`}>
			<Comments></Comments>
		</Route>
		</>
	)
});

export default QouteDetail;