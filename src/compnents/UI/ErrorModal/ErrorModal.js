
import './ErrorModal.css'
import Button from '../Button/Button';
const ErrorModal = ((props)=>{
	// console.log(props);
	const CloseModal = (()=>{
		props.CloseError(false);
	})
	return(
		<div className='backdrop'>
			<div className='modal'>
				<div className='header'><h2 >{props.error.type}</h2></div>
				<p className='content'>{props.error.content}</p>
				<Button className={'btn-danger'} onClick={CloseModal}>Close</Button>
			</div>
		</div>
	);
});

export default ErrorModal;