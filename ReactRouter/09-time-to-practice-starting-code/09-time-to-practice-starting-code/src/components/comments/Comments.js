import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { getAllComments } from '../lib/api';
import CommentsList from '../comments/CommentsList';
import Card from '../UI/Card';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';
// import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {status , error, data, sendRequest} = useHttp(getAllComments);
  // const routeHistory = useHistory();
  let comments = <div className='entered'><LoadingSpinner></LoadingSpinner></div>
  const params = useParams();
  useEffect(()=>{
    sendRequest(params['qouteID']);
  },[params,sendRequest]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const onCommentChangeHandler = useCallback(()=>{
    // sendRequest(params['qouteID']);
  },[]);

  if(status === 'pending'){
    return comments;
  }

  if(status === 'completed' && !error && data.length > 0){
    comments = <><CommentsList comments={data}></CommentsList></>
  }

  if(status === 'completed' && !error && data.length === 0)
  {
    comments = <Card>No Comments Found</Card>;
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={onCommentChangeHandler} id={params['qouteID']} />}
      {!isAddingComment && comments}
    </section>
  );
};

export default Comments;
