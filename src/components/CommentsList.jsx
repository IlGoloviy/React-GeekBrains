import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';

import { fetchComments } from '../actions/commentActions';

const CommentsList = props => {
  useEffect(() => {
    if (!props.comments.length) {
      props.dispatch(fetchComments());
    }
  }, []);

  if (!props.comments.length) {
    return (
      <div className="blank-page">
        <div className="spiner"></div>
      </div>
    );
  } else {
    const comments = props.comments.map(comment => {
      return <Comment key={comment.id} comment={comment}></Comment>
    });

    return (
      <div className="comment-list">
        {comments}
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(CommentsList);