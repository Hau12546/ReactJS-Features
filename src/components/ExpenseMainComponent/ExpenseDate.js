import './ExpenseDate.css';
const ExpenseDate = (props)=>{
	console.log(props);
	let Month = props.date.toLocaleDateString('en-US',{month:'long'});
	let Date = props.date.toLocaleDateString('en-US',{day:'2-digit'});
	let Year = props.date.getFullYear();
	return (
		<div className='date-form'>
				<div>{Month}</div>
				<div>{Date}</div>
				<div>{Year}</div>
			</div>
	)
}

export default ExpenseDate;