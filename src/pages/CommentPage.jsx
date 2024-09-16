import React from 'react';
import { connect } from 'react-redux';

import Comment from '../components/Comment';
import User from '../components/User';
import Post from '../components/Post';

import { fetchComment } from '../actions/commentActions';
import { fetchUser, deleteUser } from '../actions/userActions';
import { fetchPost, deletePost } from '../actions/postActions';

class CommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      user: null
    }
  }
  
  render() {
    return (
      <div className="comment-page">
        {(Object.keys(this.props.user).length != 0) && <User user={this.props.user} />}
        <div className="arrow">&#8658;</div>
        {(Object.keys(this.props.post).length != 0) && <Post post={this.props.post} />}
        <div className="arrow"><span>&#8658;</span></div>
        {(Object.keys(this.props.comment).length != 0) && <Comment comment={this.props.comment}/>}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchComment(this.props.match.params.commentId));
  }

  componentDidUpdate() {
    if ((Object.keys(this.props.comment).length != 0) 
      && (Object.keys(this.props.post).length == 0)) {
      const idPost = this.props.comment.postId;
      this.props.dispatch(fetchPost(idPost));
    }
    if ((Object.keys(this.props.post).length != 0)
      && (Object.keys(this.props.user).length == 0)) {
      const idUser = this.props.post.userId;
      this.props.dispatch(fetchUser(idUser));
    }
  }

  componentWillUnmount() {
    this.props.dispatch(deletePost());
    this.props.dispatch(deleteUser());
  }
}

function mapStateToProps(state) {
  return {
    comment: state.comments.comment,
    user: state.users.user,
    post: state.posts.post
  }
}

export default connect(mapStateToProps)(CommentPage);