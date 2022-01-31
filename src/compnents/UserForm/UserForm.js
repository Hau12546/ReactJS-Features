import styles from './UserForm.css'

import { useState } from "react/cjs/react.development";
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
const UserForm = ((props)=>{
	const [Error,setError] = useState({
		type:'',
		content:'',
	})
	const [isInvalid,checkValidator] = useState(false);
	const [userInput, setUserInfo] = useState({
		enteredName:'',
		enteredAge:''
	});
	const NameChangeHandler = ((event)=>{
		if(ValidateName(event.target.value)) return;
		checkValidator(false);
		setUserInfo((preState)=>{
			return {
				...preState,
				enteredName:event.target.value
			}
		});
	});


	const AgeChangeHandler = ((event)=>{
		if(ValidateAge(event.target.value)) return;
		checkValidator(false);
		setUserInfo((preState)=>{
			return {
				...preState,
				enteredAge:event.target.value
			}
		})
	})

	const addUserInfo = ((event)=>{
		event.preventDefault();
		if(ValidateName(userInput.enteredName)) return;
		if(ValidateName(userInput.enteredAge)) return;
		let newUser = {
			id:Math.ceil((Math.random()*1000)+1),
			name:JSON.parse(JSON.stringify(userInput.enteredName)||''),
			age:JSON.parse(JSON.stringify(userInput.enteredAge)||''),
		};
		props.AddUser(newUser);
		setUserInfo({
			enteredAge:'',
			enteredName:''
		});
	});


	const ValidateName = ((value)=>{
		if(value.trim()===''){
			checkValidator(true);
			setError({
				type:'Invalid Name',
				content:'Name is not appropriate'
			});
			// setUserInfo({
			// 	enteredAge:'',
			// 	enteredName:''
			// });
			return true; 
		}
		return false;
	});

	const ValidateAge = ((value)=>{
		if(Number(value)>110 ||value.match(/[a-zA-Z]/g)
		|| Number(value)===0 
		|| value.trim().length===0){
			checkValidator(true);
			setError({
				type:'Invalid Age',
				content:'Age is not appropriate'
			});
			return true;
		}
		return false;
	});

	const NotifiedError = ((isAware)=>{
		checkValidator(isAware);
		setUserInfo({
			enteredAge:'',
			enteredName:''
		});
	});


	return (
		
		<>
		{(isInvalid)&& <ErrorModal error={Error} CloseError={NotifiedError} ></ErrorModal>}
		<h1>Person's Info</h1><Card onSubmit={addUserInfo} className="form-control">
			<div className='form-input'><label>UserName</label>
				<input type='text' name='username' placeholder='Enter your name'
					value={userInput.enteredName} onChange={NameChangeHandler} /></div>
			<div className='form-input'><label>UserAge</label>
				<input type='text' name='userage' placeholder='Enter your age'
					value={userInput.enteredAge} onChange={AgeChangeHandler} />	</div>
			<div><Button className={'submit-btn'} type="submit" onClick={addUserInfo} >Add User</Button></div>
		</Card></>
	);
});

export default UserForm;