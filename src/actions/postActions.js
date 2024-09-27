import axios from 'axios';

export function fetchPosts() {
  return function(dispath) {
    dispath({type: 'FETCH_POSTS'});

    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        dispath({
          type: 'FETCH_POSTS_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_POSTS_REJECTED',
          payload: err
        })
      })
  }
}

export function fetchPost(id) {
  return function(dispath) {
    dispath({type: 'FETCH_POST'});

    axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        dispath({
          type: 'FETCH_POST_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_POST_REJECTED',
          payload: err
        })
      })
  }
}

export function addPost(data) {
  return {
    type: 'ADD_POST',
    payload: data
  }
}

export function deletePost() {
  return {
    type: 'DELETE_POST',
    payload: null
  }
}