import './Chart.css';
import ChartBar from './ChartBar';
const Chart = ((props)=>{
	const barValue = props.dataPoints.map((data)=>data.value);
	const maxBarValue = Math.max(...barValue);
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoints, index)=>{
			return <ChartBar key={index} 
			value={dataPoints.value}
			maxValue={maxBarValue}
			label={dataPoints.label}></ChartBar>})}
		</div>
	);
});

export default Chart;