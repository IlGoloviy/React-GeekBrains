import React from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';

import { fetchComments } from '../actions/commentActions';

class CommentsList extends React.Component {
  
  render() {
    if (!this.props.comments.length) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const comments = this.props.comments.map(comment => {
        return <Comment key={comment.id} comment={comment}></Comment>
      });

      return (
        <div className="comment-list">
          {comments}
        </div>
      );
    }
  }

  componentDidMount() {
    if (!this.props.comments.length) {
      this.props.dispatch(fetchComments());
    }
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(CommentsList);