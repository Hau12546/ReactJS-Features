import { useState } from 'react';
import './App.css';
import ExpenseMain from './components/ExpenseMainComponent/ExpenseMain';
import NewExpense from './components/NewExpense/NewExpense';
// import ExpensesFilter from './components/ExpenseMainComponent/ExpensesFitler';
const App = ()=>{
  let ExpenseList = [
    {id:'0',title:'Lamborgini', amount:500, date: new Date(2022, 1, 2), status:'Sold'},
    {id:'1',title:'AirPlane2021', amount:1000000, date: new Date(2021, 7, 2), status:'Available'},
    {id:'2',title:'AirPlane2020', amount:800000, date: new Date(2020, 7, 2), status:'Available'},
    // {id:'3',title:'AirPlane2019', amount:700000, date: new Date(2019, 7, 2), status:'Available'},
    {id:'4',title:'AirPlane2018', amount:500000, date: new Date(2018, 7, 2), status:'Available'},
  ];
  const [Expenses,setExpenseItem] = useState(ExpenseList);
  const ReceiveExpenseItem = ((expenseItem)=>{
    setExpenseItem((preState)=>{
      return [expenseItem,...preState];
    });
  });
  return (
    <div className="App" >
      <header>My First React App, Yeah!!!</header>
      <NewExpense SendExpenseItem={ReceiveExpenseItem} />
      <ExpenseMain  item={Expenses}></ExpenseMain>
    </div>
  );
}


// function dateTransfrom(date=null){
//   if(date){
//     return date.toISOString().slice(0,10);
//   }
//   return 'Invalid Date';
// }

export default App;
