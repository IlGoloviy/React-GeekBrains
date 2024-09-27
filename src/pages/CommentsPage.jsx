import React from 'react';
import CommentsList from '../components/CommentsList';

const CommentsPage = props => {
  return (
    <>
    <h1 className="desc">
      Comments
    </h1>
    { 
      (!props.children) 
      ?
      <CommentsList></CommentsList>
      :
      props.children
    }
    </>
  );
}

export default CommentsPage;