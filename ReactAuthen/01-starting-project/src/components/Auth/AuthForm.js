import { useState,useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthenAPI } from '../../assess/api';
import useHttp from '../hooks/use-Http';
import useInput from '../hooks/use-Input';
import { authenActions } from '../Store/AuthenRedux';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const routerHistory = useHistory();
  const emailRef = useRef('test@gmail.com');
  const passwordRef = useRef('123456');
  const {isValidInput:validUserEmail, onChangeValidateInput:onChangeUserEmail, onFocusOutValidateInput:onFocusOutUserEmail} = useInput();
  const {isValidInput:validUserPassword ,onChangeValidateInput:onChangeUserPassword, onFocusOutValidateInput:onFocusOutUserPassword} = useInput();
  const {sendRequest:registerAction} = useHttp();
  const {sendRequest:loginAction} = useHttp();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state['isLoggedIn']);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(()=>{
    if(!isLoggedIn){
      routerHistory.replace('/auth');
    }
  },[isLoggedIn])

  const showErrorMsg = ((res)=>{
    let defaultErrorMsg = 'Something went wrong';
        if(res && res['error'] && res['error']['message'])
        {
          defaultErrorMsg = res['error']['message'];
        }
        alert(defaultErrorMsg);
  });

  const autoLogoutHandler = ((expirationTime)=>{
    const currentTime  = new Date().getTime();
    const timeLeft = expirationTime - currentTime;
    return timeLeft;
  });
  

  const onSubmitHandler = ((event)=>{
    event.preventDefault();
    let LoginInterface = {
      email:null,
      password:null,
      returnSecureToken:true
    }
    if(validUserEmail && validUserPassword && !isLogin){
      LoginInterface['email'] = emailRef['current']['value'];
      LoginInterface['password'] = passwordRef['current']['value'];
      registerAction({url:AuthenAPI.register, method:'POST', body:LoginInterface})
      .then((res)=>console.log(res)).catch((res)=>showErrorMsg(res));
    }else if(validUserEmail && validUserPassword && isLogin){
      LoginInterface['email'] = emailRef['current']['value'];
      LoginInterface['password'] = passwordRef['current']['value'];
      loginAction({url:AuthenAPI.login, method:'POST', body:LoginInterface}).then((res)=>{
        console.log(res)
        dispatch(authenActions['loggedIn'](res['idToken']));
        let expireTime = new Date().getTime() + (Number(res['expiresIn']) * 1000);
        const logoutTimeRemain = autoLogoutHandler(expireTime)
        setTimeout(() => {
          dispatch(authenActions['loggedOut']())
        }, 3000);
        routerHistory.replace('/');
      }).catch((res)=>showErrorMsg(res));
    }else {
      alert('Register Information is wrong.')
    }
  });

  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required 
          onClick={onChangeUserEmail} 
          onBlur={onFocusOutUserEmail} 
          ref={emailRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required
          ref={passwordRef}
          onChange={onChangeUserPassword}
          onBlur={onFocusOutUserPassword}
           />
        </div>
        <div className={classes.actiSons}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
