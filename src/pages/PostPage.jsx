import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
import Comment from '../components/Comment';

import { fetchPost } from '../actions/postActions';
import { fetchComments } from '../actions/commentActions';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: null
    }
  }
  
  render() {
    let commentsPost;
    if (this.state.comments) {
      commentsPost = this.state.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
      });
    }

    return (
      <div className="post-page">
        {(!Object.keys(this.props.post).length == 0) 
          && <Post post={this.props.post} />}
        {this.state.comments 
          && 
          <div className="post-page-comments">
            {commentsPost}
          </div>}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.match.params.postId));
    if (!this.props.comments.length) {
      this.props.dispatch(fetchComments());
    }
  }

  componentDidUpdate() {
    if ((!Object.keys(this.props.post).length == 0) && !this.state.comments) {
      const idPost = this.props.post.id;
      const postComments = this.props.comments.filter(comment => {
        return (comment.postId === idPost);
      }); 
      this.setState({comments: postComments});
    }
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(PostPage);