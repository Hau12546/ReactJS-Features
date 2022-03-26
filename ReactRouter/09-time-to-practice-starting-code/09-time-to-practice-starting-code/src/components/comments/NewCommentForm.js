import { useRef } from 'react';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { addComment } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {status, error, sendRequest} = useHttp(addComment);
  let isLoading = false;
  const {onAddedComment} = props;
  useEffect(()=>{
    onAddedComment();
  },[status, error, onAddedComment]);
  const submitFormHandler = (event) => {
    event.preventDefault();
    isLoading = true;
    sendRequest({commentData: {text:commentTextRef['current'].value}, quoteId:props['id']});
    if(status === 'completed'){
      isLoading = false;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {isLoading && <div className='centered'><LoadingSpinner></LoadingSpinner></div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
