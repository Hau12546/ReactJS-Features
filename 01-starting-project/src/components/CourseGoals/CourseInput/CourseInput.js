import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setValidateInput] = useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim()!==''){
      setValidateInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim()===''){
      setValidateInput(false);
      return;
    }
    setValidateInput(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${(isValid)?styles['']:styles['invalid']}`}>
        <label style={{'color': (isValid)?'black':'blue' }}>Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
