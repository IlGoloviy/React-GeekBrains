import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { addPost } from '../actions/postActions';
import { fetchUsers } from '../actions/userActions';

const Modal = props => {
  const [redirect, setRedirect] = useState(false);
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [idUser, setIdUser] = useState('');
  
  useEffect(() => {
    if (!props.users.length) {
      props.dispatch(fetchUsers());
    }
  }, []);

  const inputUser = event => {
    setIdUser(event.target.value);
  }

  const inputDescription = event => {
    setDescription(event.target.value);
  }

  const inputText = event => {
    setText(event.target.value);
  }

  const createPost = () => {
    const post = {
      userId: idUser,
      title: description,
      body: text
    };
    props.dispatch(addPost(post));
    setRedirect(true);
  }

  let optionList;
  if (props.users) {
    optionList = props.users.map(user => {
      return <option key={user.id} value={user.id}>{user.name}</option>
    });
  }

  if (redirect) {
    return <Redirect to="/posts" />;
  }
    
  return (
    <>
    <h1 className="desc">adding a post</h1>
    <div className="modal-add_post">
      <label>
        <span>user</span>
        <select className="modal-options" onChange={inputUser}>
          {optionList}
        </select>
      </label>
      <label>
        <span>title</span>
        <input 
          className="modal-input"  
          type="text"
          onChange={inputDescription}
        />
      </label>
      <label>
        <span>text</span>
        <textarea 
          className="modal-text" 
          cols="30" rows="5"
          onChange={inputText}
          value={text}
        />
      </label>
      <button onClick={createPost}>create</button>
    </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Modal);