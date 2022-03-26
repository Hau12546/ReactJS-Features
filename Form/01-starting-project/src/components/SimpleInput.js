// import { useState } from "react";
import '../index.css';
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // eslint-disable-line
  let {value:userName,hasError:nameIsInvalid,isValidValue ,
    valueInputHandler:nameInputHandler,checkTouched:checkName,
    resetValue:resetName } = useInput(((value)=>value.trim()!==''));
  let {value:userEmail,hasError:emailIsInvalid,isValidValue:isValidEmail ,
    checkTouched:checkEmail, resetValue:resetEmail,
    valueInputHandler:emailInputHandler}  = useInput(((value)=>(value.match(emailPattern))))
  // const [userEmail, setEmail] = useState('');
  // const [enteredEmailTouched, validateEmailTouched] = useState(false);
  // let isValidEmail = (userEmail.match(emailPattern));
  // let emailIsInvalid = !isValidEmail && enteredEmailTouched;
  // const emailInputHandler = ((event)=>{
  //   setEmail(event.target.value);
  // });
  let formIsValid = false;
  if(nameIsInvalid || emailIsInvalid){
    formIsValid  = false;
  }else{
    formIsValid = true;
  }
  // const validateBlurValue = ((event)=>{
    
  // });
  const onSubmit = ((event)=>{
    event.preventDefault();
    checkName(true);
    checkEmail(true);
    if(nameIsInvalid || emailIsInvalid ){
      return;
    }
    console.log(userName, userEmail);
    resetName();
    resetEmail();
  });
  let validNameFormCSS = (!nameIsInvalid )?'form-control':'form-control invalid';
  let validEmailFormCSS = (!emailIsInvalid)?'form-control':'form-control invalid'

  return (
    <form onSubmit={onSubmit}>
      <div className={validNameFormCSS}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange={nameInputHandler} 
        // onBlur={validateBlurValue}
        value={userName}/>
        {!isValidValue && <p className='error-text'>Name must be entered</p>}
      </div>
      <div className={validEmailFormCSS}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='email' 
        onChange={emailInputHandler} 
        // onBlur={validateBlurValue}
        value={userEmail}  />
        {!isValidEmail && <p className='error-text'>Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
