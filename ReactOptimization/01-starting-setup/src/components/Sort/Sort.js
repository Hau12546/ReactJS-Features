import { useMemo } from "react";
import React from "react";
const Sort = ((props)=>{
	const items = props.item;
	const SortedItem = useMemo(()=>{
		console.log('Run again');
		return items.sort((a,b)=>{return (a-b)}).map((value,index)=><li key={index}>{value}</li>); 
	},[items])
	return (
		<>
		<h3>{props.title}</h3>
		<ul>
			{SortedItem}
		</ul>
		</>
	);
})

export default React.memo(Sort);