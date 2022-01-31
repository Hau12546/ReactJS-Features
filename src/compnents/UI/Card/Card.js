import './Card.css';

const Card = ((props)=>{
	let customClass = `card ${props.className}`;
	return(
		<div className={customClass}>
			{props.children}
		</div>
	);
});

export default Card;