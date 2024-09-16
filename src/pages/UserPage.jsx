import React from 'react';
import { connect } from 'react-redux';

import User from '../components/User';
import Post from '../components/Post';

import { fetchUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';
 
class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    }
  }
 
  render() {
    let postsUser;
    if (this.state.posts) {
      postsUser = this.state.posts.map(post => {
        return <Post key={post.id} post={post} />
      });
    }

    return (
      <div className="user-page">
        {(!Object.keys(this.props.user).length == 0) 
          && <User user={this.props.user} />}
        {this.state.posts 
          && 
          <div className="user-page-posts">
            {postsUser}
          </div>}
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.match.params.userId));
    if (!this.props.posts.length) {
      this.props.dispatch(fetchPosts());
    }
  }

  componentDidUpdate() {
    if ((!Object.keys(this.props.user).length == 0) && !this.state.posts) {
      const idUser = this.props.user.id;
      const userPosts = this.props.posts.filter(post => {
        return (post.userId === idUser);
      }); 
      this.setState({posts: userPosts});
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(UserPage);