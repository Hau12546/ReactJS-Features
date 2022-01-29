import './ExpenseMain.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFitler';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import Chart from '../Chart/Chart'
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
const ExpenseMain = (props)=>{
	const [chosenYear, setYear] = useState('2022');
	const ReceiveChosenYear = ((receivedYear)=>{
		setYear(receivedYear);
	});

	let FilteredExpenses = props.item.filter((value,index)=>{
		if(value.date.toLocaleDateString().slice(4)===chosenYear){
			return value;
		}
	});
	// let FilteredExpenses = props.item.filter((value)=>value.date.toLocaleDateString().slice(4)===chosenYear);
	return(
		<Card className="expenses">
			<ExpensesFilter  SendChosenYear={ReceiveChosenYear}/>
			<ExpenseChart expenses={FilteredExpenses}></ExpenseChart>
			<ExpensesList items={FilteredExpenses}></ExpensesList>
		</Card>
	)
}

export default ExpenseMain;