import Chart from "../Chart/Chart";

const ExpenseChart = ((props)=>{
	let chartDataPoints = [
		{label:'Jan',value:0},
		{label:'Feb',value:25},
		{label:'Mar',value:30},
		{label:'Apr',value:35},
		{label:'May',value:40},
		{label:'Jun',value:50},
		{label:'Jul',value:65},
		{label:'Aug',value:75},
		{label:'Sep',value:80},
		{label:'Oct',value:85},
		{label:'Nov',value:95},
		{label:'Dec',value:100},
	];

	for (const expense of props.expenses) {
			const expenseMonth = expense.date.toLocaleDateString('en-US',{month:'short'});
			chartDataPoints.find((value)=>value.label===expenseMonth).value += Number(expense.amount)
			// console.log(chartDataPoints.find((value)=>value.label===expenseMonth).value)
	}
	return(
		<Chart dataPoints={chartDataPoints}></Chart>
	);
});

export default ExpenseChart;