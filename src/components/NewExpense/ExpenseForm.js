import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props)=>{
	const [userInput, setUserInput] = useState({
		enteredTitle:'',
		enteredAmount:'',
		enteredDate:''
	});

	const TitleChangeHandler = (event)=>{
		setUserInput((prevState)=>{
			return {...prevState,
				enteredTitle:event.target.value};
			});
			console.log(userInput);
	};

	// const [enteredAmount,setAmount] = useState('');
	const AmountChangeHandler = (event)=>{
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount:event.target.value
		// }); //not depend on the previous Value

		setUserInput((prevState)=>{
			return {...prevState,enteredAmount:event.target.value};
		})
		console.log(userInput);
	};

	// const [enteredDate,setDate] = useState('');
	const DateChangeHandler = (event)=>{
		// setUserInput({
		// 	...userInput,
		// 	enteredDate:event.target.value
		// });

		setUserInput((prevState)=>{
			return {...prevState,enteredDate:event.target.value};
		})
	};

	const submitHandler = ((event)=>{
		event.preventDefault();
		const expenseInfo = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate)
		};
		props.SendExpenseInfo(expenseInfo);
		setUserInput({
			enteredTitle:'',
			enteredAmount:'',
			enteredDate:''
		});
	});

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={userInput.enteredTitle} onChange={TitleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={AmountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2019-01-01' max='2022-01-28' value={userInput.enteredDate} onChange={DateChangeHandler} />
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;