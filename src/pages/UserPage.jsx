import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import User from '../components/User';
import Post from '../components/Post';

import { fetchUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';
 
const UserPage = props => {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    props.dispatch(fetchUser(props.match.params.userId));
    if (!props.posts.length) {
      props.dispatch(fetchPosts());
    }
  }, []);

  useEffect(() => {
    return () => {
      if ((!Object.keys(props.user).length == 0) && !posts) {
        const idUser = props.user.id;
        const userPosts = props.posts.filter(post => {
          return (post.userId === idUser);
        }); 
        setPosts(userPosts);
      }
    }
  });
 
  let postsUser;
  if (posts) {
    postsUser = posts.map(post => {
      return <Post key={post.id} post={post} />
    });
  }

  return (
    <div className="user-page">
      {(!Object.keys(props.user).length == 0) 
        && <User user={props.user} />}
      {posts 
        && 
        <div className="user-page-posts">
          {postsUser}
        </div>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(UserPage);