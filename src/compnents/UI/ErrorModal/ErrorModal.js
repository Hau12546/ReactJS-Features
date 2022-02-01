
import './ErrorModal.css'
import Button from '../Button/Button';
import reactDom from 'react-dom';
const ErrorModal = ((props)=>{
	// console.log(props);
	const CloseModal = (()=>{
		props.CloseError(false);
	});

	const Backdrop = ((props)=>{
		return (<div className='backdrop'/>)
	});

	const ModalRoot = ((props)=>{
		return(<div className='modal'>
		<div className='header'><h2>{props.error.type}</h2></div>
		<p className='content'>{props.error.content}</p>
		<Button className={'btn-danger'} onClick={CloseModal}>Close</Button>
	</div>);
	});

	return(
		<>
			{/* {reactDom.createPortal(<Backdrop/>, document.getElementById('overlay-root'))}
			{reactDom.createPortal(<ModalRoot type={props.error.type} 	content={props.error.content} onClick={CloseModal} />, document.getElementById('modal-root'))} */}
			<div className='backdrop'/>
			<div className='modal'>
		<div className='header'><h2>{props.error.type}</h2></div>
		<p className='content'>{props.error.content}</p>
		<Button className={'btn-danger'} onClick={CloseModal}>Close</Button>
	</div>
		</>
	);
});

export default ErrorModal;