import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';

import { fetchPosts } from '../actions/postActions';

class PostsList extends React.Component {
  render() {
    console.log(this.props.posts.length);
    if (!this.props.posts.length) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const posts = this.props.posts.map((post, index) => {
        return <Post key={index} post={post}></Post>
      });

      return (
        <div className="post-list">
          {posts}
        </div>
      );
    }
  }

  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.dispatch(fetchPosts());
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(PostsList);