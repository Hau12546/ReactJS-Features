import { useRef } from 'react';
import { useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntered, setEntered] = useState(false);
  const onAuthorChangeHandler = ((event)=>{
    if(!authorInputRef['current'].value){
      setEntered(true);
      return;
    }
    setEntered(false);
  });

  const onTextChangeHandler = (()=>{
    if(!textInputRef['current'].value){
      setEntered(true);
      return;
    }
    setEntered(false);
  });
  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    if(!enteredAuthor && !enteredText){
      setEntered(true);
      return;
    }
    setEntered(false);
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <>
    <Prompt when={isEntered} message={()=>'All inputed info will be lost'}></Prompt>
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} onBlur={onAuthorChangeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef} onBlur={onTextChangeHandler}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card></>
  );
};

export default QuoteForm;
