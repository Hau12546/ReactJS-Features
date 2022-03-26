import '../index.css'
import useForm from '../hooks/use-form';
const BasicForm = () => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // eslint-disable-line
  let {value:fname, getValue:onChangeFname,hasError:errorFname, isValidValue:validFname,
  resetValue:resetFname, validateFocusOut:checkFnameFocusOut} = useForm((value)=>value.trim()!=='');
  let {value:lname, getValue:onChangeLName, hasError:errorLname, isValidValue:validLname,
  resetValue:resetLname, validateFocusOut:checkLnameFocusOut} = useForm((value)=>value.trim()!=='');
  let {value:email, getValue:onChangeEmail, hasError:errorEmail, isValidValue:validEmail,
  resetValue:resetEmail, validateFocusOut:checkEmailFocusOut} = useForm((value)=>value.match(emailPattern));
  let fNameFormInvalid = (errorFname)?'form-control invalid':'form-control';
  let lNameFormInvalid = (errorLname)?'form-control invalid':'form-control';
  let EmailFormInvalid = (errorEmail)?'form-control invalid':'form-control';
  const onSubmit = ((event)=>{
    event.preventDefault();
    checkFnameFocusOut();
    checkLnameFocusOut();
    checkEmailFocusOut();
    if(!validFname || !validLname || !validEmail){
      return;
    }
    console.log(fname, lname, email);
    resetFname();
    resetLname();
    resetEmail();
  });
  return (
    <form onSubmit={onSubmit}>
      <div className='control-group'>
        <div className={fNameFormInvalid}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fname} onChange={onChangeFname} onBlur={checkFnameFocusOut} />
          {errorFname && <p>FirstName is not valid</p>}
        </div>
        <div className={lNameFormInvalid}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lname} onChange={onChangeLName} onBlur={checkLnameFocusOut} />
          {errorLname && <p>LastName is not valid</p>}
        </div>
      </div>
      <div className={EmailFormInvalid}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={onChangeEmail} onBlur={checkEmailFocusOut} />
        {errorEmail && <p>Email is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={errorFname || errorLname || errorEmail}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
