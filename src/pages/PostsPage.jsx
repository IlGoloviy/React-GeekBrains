import React from 'react';
import { Link } from 'react-router-dom';

import PostsList from '../components/PostsList';

class PostsPage extends React.Component {
  
  render() {
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
        (!this.props.children) 
        ?
        <PostsList></PostsList>
        :
        this.props.children
      }
      </>
    );
  }
}

export default PostsPage;