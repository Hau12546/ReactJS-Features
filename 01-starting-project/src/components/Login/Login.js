import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import { Inputs } from '../UI/Inputs/Inputs';

const emailReducer = ((state,action)=>{
  if(action.type ==='USER_INPUT'){
    return{
      value:action.val,
      isValid:action.val && action.val.includes('@')
    }
  }

  if(action.type ==='USER_BLUR'){
    return{
      value:state.value,
      isValid:state.isValid
    }
  }
  return {
    value:'',
    isValid:false
  };
});


const passwordReducer = ((state,action)=>{
  if(action.type==='USER_INPUT'){
    return {
      value:action.payload,
      isValid:action.payload.trim().length>6
    }
  }

  if(action.type === 'USER_BLUR'){
    return {
      value:state.value,
      isValid:state.isValid
    }
  }

  return {
    value:'',
    isValid:false
  }
});

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  // setCookie(cname,cvalue,exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
  //   let expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }
  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid:false
  })

  const [passwordState,dispatchPassword] = useReducer(passwordReducer,{
    value:'',
    isValid:false
  });


  const AuthCtx = useContext(AuthContext);
  
  useEffect(()=>{
    // let userObj = decodeURIComponent(document.cookie).split(';');
    // console.log(userObj);
    let checkTimer =  setTimeout(() => {
      validateEmailHandler();
      validatePasswordHandler();
      if(emailState.isValid && passwordState.isValid) 
      {
        setFormIsValid(true);
      }
    }, 500);

    return ()=>clearTimeout(checkTimer);
  },[emailState, passwordState]);

  let emailRefs = useRef();
  let passwordRefs = useRef();
  // const setCookie = ((cname,cvalue,exdays)=>{
  //   const d = new Date();
  //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
  //   let expires = "expires=" + d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // });

  // const getCookie = ((cname)=>{
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //   while (c.charAt(0) === ' ') {
  //     c = c.substring(1);
  //   }
  //   if (c.indexOf(name) === 0) {
  //     return c.substring(name.length, c.length);
  //   }
  // }
  // return "";
  // });

  // const checkCookie =(()=>{
  //   let user = getCookie("username");
  //   if (user !== "") {
  //   alert("Welcome again " + user);
  //    } else {
  //    user = prompt("Please enter your name:","");
  //    if (user != "" && user != null) {
  //      setCookie("username", user, 30);
  //    }
  //   }
  // });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT', val:event.target.value});
    // setFormIsValid(
    //   emailState.value.includes('@')
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', payload:event.target.value});
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   passwordState.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'USER_BLUR'});
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'USER_BLUR'});
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const d = new Date();
    d.setTime(d.getTime()+100);
    document.cookie = `userEmail=${emailState.value}; ${d.toUTCString()}`;
    document.cookie = `userpassword=${passwordState.value}; ${d.toUTCString()}`;
    if(formIsValid){
      AuthCtx.onLogin(emailState.value, passwordState.value);
    }else if (!emailState.isValid){
      emailRefs.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */
        <Inputs
        ref={emailRefs || passwordRefs}
        mailisValid={emailState.isValid}
        passwordisValid={passwordState.isValid}
        emailValue={emailState.value}
        passwordValue={passwordState.value}
        emailChangeEvent={emailChangeHandler}
        validateEmailEvent={validateEmailHandler}
        passwordChangeEvent={passwordChangeHandler}
        validatePasswordEvent={validatePasswordHandler}
        ></Inputs>
        }
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
