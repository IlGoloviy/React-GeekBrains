import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Comment from '../components/Comment';
import User from '../components/User';
import Post from '../components/Post';

import { fetchComment } from '../actions/commentActions';
import { fetchUser, deleteUser } from '../actions/userActions';
import { fetchPost, deletePost } from '../actions/postActions';

const CommentPage = props => {
  const [post, setPost] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    props.dispatch(fetchComment(props.match.params.commentId));
  }, []);

  useEffect(() => {
    if ((Object.keys(props.comment).length != 0) 
      && (Object.keys(props.post).length == 0)) {
        console.log('poooooooooooost')
        const idPost = props.comment.postId;
        props.dispatch(fetchPost(idPost));
      }
    if ((Object.keys(props.post).length != 0)
      && (Object.keys(props.user).length == 0)) {
        console.log('useeeeeeeeeeeeer')
        const idUser = props.post.userId;
        props.dispatch(fetchUser(idUser));
      }
  });

  useEffect(() => { 
    return () => {
      props.dispatch(deletePost());
      props.dispatch(deleteUser());
    }
  }, []);
  
  return (
    <div className="comment-page">
      {(Object.keys(props.user).length != 0) && <User user={props.user} />}
      <div className="arrow">&#8658;</div>
      {(Object.keys(props.post).length != 0) && <Post post={props.post} />}
      <div className="arrow"><span>&#8658;</span></div>
      {(Object.keys(props.comment).length != 0) && <Comment comment={props.comment}/>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    comment: state.comments.comment,
    user: state.users.user,
    post: state.posts.post
  }
}

export default connect(mapStateToProps)(CommentPage);