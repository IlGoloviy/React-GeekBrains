import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
  const { post } = props;

  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`} className="post-card-link">
        <h3 className="post-card-desc">
          {post.title}
        </h3>
      </Link>
      <p className="post-card-text">
        {post.body}
      </p>
    </div>
  );      
}

export default Post;