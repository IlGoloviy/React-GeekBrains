import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

import { fetchPosts } from '../actions/postActions';

const PostsList = props => {
  useEffect(() => {
    if (!props.posts.length) {
      props.dispatch(fetchPosts());
    }
  }, []);

  console.log(props.posts.length);
  if (!props.posts.length) {
    return (
      <div className="blank-page">
        <div className="spiner"></div>
      </div>
    );
  } else {
    const posts = props.posts.map((post, index) => {
      return <Post key={index} post={post}></Post>
    });
    return (
      <div className="post-list">
        {posts}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(PostsList);