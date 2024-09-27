import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
import Comment from '../components/Comment';

import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentActions';

const PostPage = props => {
  const [comments, setComments] = useState('');
  
  useEffect(() => {
    props.dispatch(fetchPost(props.match.params.postId));
    if (!props.comments.length) {
      props.dispatch(fetchComments());
    }
  }, []);

  useEffect(() => {
    return () => {
      if ((Object.keys(props.post).length != 0) && !comments) {
        console.log('aaaaaaa')
        const idPost = props.post.id;
        const postComments = props.comments.filter(comment => {
          return (comment.postId === idPost);
        }); 
        setComments(postComments);
      }
    }
  });

  let commentsPost;
  if (comments) {
    commentsPost = comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />
    });
  }

  return (
    <div className="post-page">
      {(!Object.keys(props.post).length == 0) 
        && <Post post={props.post} />}
      {comments 
        && 
        <div className="post-page-comments">
          {commentsPost}
        </div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(PostPage);