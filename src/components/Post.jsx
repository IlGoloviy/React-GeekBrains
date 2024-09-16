import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;

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
}