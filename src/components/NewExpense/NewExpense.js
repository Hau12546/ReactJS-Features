import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props)=>{
	let statusItem ='Available';
	const RecevieExpenseInfo = ((expenseInfo)=>{
		let expenseItem = {
			id:(Math.random()*100)+2,
			title:expenseInfo.title,
			amount:expenseInfo.amount,
			date:expenseInfo.date,
			status:statusItem
		};
		props.SendExpenseItem(expenseItem);
	});
	return(
		<div className="new-expense">
			<ExpenseForm SendExpenseInfo={RecevieExpenseInfo}></ExpenseForm>
		</div>
	);
}

export default NewExpense;