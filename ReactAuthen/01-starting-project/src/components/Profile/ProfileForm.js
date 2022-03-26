import classes from './ProfileForm.module.css';
import useInput from '../hooks/use-Input';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenActions } from '../Store/AuthenRedux';
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const passwordRef = useRef();
  const routerHistory = useHistory();
  const dispatch = useDispatch();
  const accountToken = useSelector((state)=>state.userToken)
  const {isValidInput:passwordValidity, 
    onChangeValidateInput:onChangePasswordValidate, 
    onFocusOutValidateInput:onChangePasswordFocusOut} = useInput();
    const onSubmitHandler = ((event)=>{
      event.preventDefault();
      if(!passwordValidity){
        return;
      }
      let passwordChangeInterface = {
        idToken:accountToken,
        password:passwordRef['current']['value'] || null,
        returnSecureToken: true
      }
      dispatch(authenActions['changePassword'](passwordChangeInterface));
      routerHistory.replace('/');
    });
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef} onBlur={onChangePasswordFocusOut} onChange={onChangePasswordValidate} />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
