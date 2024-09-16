import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { addPost } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.userId = React.createRef();
    this.title = React.createRef();
    this.text = React.createRef();
    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    const post = {
      userId: this.userId.current.value,
      title: this.title.current.value,
      body: this.text.current.value
    };
    this.props.dispatch(addPost(post));
    this.setState({redirect: true});
  }

  render() {
    let optionList;
    if (this.props.users) {
      optionList = this.props.users.map(user => {
        return <option key={user.id} value={user.id}>{user.name}</option>
      });
    }

    if (this.state.redirect) {
      return <Redirect to="/posts" />;
    }
    
    return (
      <>
      <h1 className="desc">adding a post</h1>
      <div className="modal-add_post">
        <label>
          <span>user</span>
          <select className="modal-options" ref={this.userId}>
            {optionList}
          </select>
        </label>
        <label>
          <span>title</span>
          <input className="modal-input" ref={this.title} type="text"/>
        </label>
        <label>
          <span>text</span>
          <textarea ref={this.text} className="modal-text" cols="30" rows="5"></textarea>
        </label>
        <button onClick={this.createPost}>create</button>
      </div>
      </>
    );
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.dispatch(fetchUsers());
    }
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Modal);