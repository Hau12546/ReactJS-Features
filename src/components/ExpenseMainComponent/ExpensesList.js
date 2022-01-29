import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ((props)=>{
	let ExpenseContents = props.items;
	if(props.items.length===0){
		return (<h2 className='expenses-list__fallback'>Found No Expenses</h2>)
	}
	return (<ul className='expenses-list'>
		{ExpenseContents.map((value, index)=>{
				return (<ExpenseItem key={index} expenseDetail={value}></ExpenseItem>)
		})}
	</ul>)
});


export default ExpensesList;