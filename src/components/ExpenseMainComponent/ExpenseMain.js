import './ExpenseMain.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFitler';
import Card from '../UI/Card';
import { useState } from 'react';
const ExpenseMain = (props)=>{
	const [chosenYear, setYear] = useState('2022');
	const ReceiveChosenYear = ((receivedYear)=>{
		setYear(receivedYear);
		console.log(chosenYear);
	});
	return(
		<Card className="expenses">
			<ExpensesFilter  SendChosenYear={ReceiveChosenYear}/>
			{props.item.map((value,index)=>{
				return (
					<ExpenseItem key={index} expenseDetail={value}></ExpenseItem>
				);
			})}
		</Card>
	)
}

export default ExpenseMain;