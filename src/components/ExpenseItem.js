import './ExpenseItem.css';
function ExpenseItem(){
	let expenseDate = new Date().toISOString().slice(0,10);
	let expenseTitle = 'Car Insurance';
	let expenseAmount = '$500'
	return (
		<div className='expense-item'>
			<div>{expenseDate}</div>
			<div className='expense-item__description'>
				<h2>{expenseTitle}</h2>
				<div className='expense-item__price'>{expenseAmount}</div>
				</div>
		</div>
	);
}


export default ExpenseItem;