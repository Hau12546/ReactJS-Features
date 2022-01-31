import './Button.css';

const Button = ((props)=>{
	let customClass = `btn ${props.className}`;
	return(
		<button className={customClass} type={props.type || 'button' } onClick={props.onClick}>
			{props.children}
		</button>
	);
})

export default Button;