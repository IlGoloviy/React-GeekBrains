import React from 'react';
import { Link } from 'react-router-dom';

import PostsList from '../components/PostsList';

const PostsPage = props => {
  return (
    <>
    <h1 className="desc">
      Posts
        <button className="btn-add_post">
          <Link to="/modal" className="link-add_post">  
            add post
          </Link>
        </button>
    </h1>
    { 
      (!props.children) 
      ?
      <PostsList></PostsList>
      :
      props.children
    }
    </>
  );
}

export default PostsPage;