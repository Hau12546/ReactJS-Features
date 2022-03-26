import classes from './Auth.module.css';
import { authStore, authAction } from '../redux/counterStore';
import useForm from '../hooks/use-form';
import { useDispatch } from 'react-redux';
// Testing193!
const Auth = () => {
  const {returnedValue:userEmail, onChangValueHandler:onChangEmailHandler,
  onFocusOutValueHandler:onFocusOutEmailHandler,isValidValue:validEmail
  } = useForm(((value)=>value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)));
  const {returnedValue:userPassword, onChangValueHandler:onChangPasswordHandler,isValidValue:validPassword,
  onFocusOutValueHandler:onFocusOutPasswordHandler} = useForm((value=>value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)));
  const dispatch = useDispatch();
  const onSubmit = ((event)=>{
    event.preventDefault();
    if(!validPassword && !validEmail){
      alert('Invalid Email or Password');
			return;
		}else if(userEmail.trim()=== '' || userPassword.trim() === ''){
      alert('You Must Entered Your Info');
      return;
    }
    dispatch(authAction.signIn());
  });
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={userEmail} 
            onChange={onChangEmailHandler} 
            onBlur={onFocusOutEmailHandler} />
            {!validEmail && <p>Entered Email is Invalid</p> }
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' value={userPassword} 
            onChange={onChangPasswordHandler}
            onBlur={onFocusOutPasswordHandler} 
            />
            {!validPassword && <p>Entered Email is Invalid</p> }
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
