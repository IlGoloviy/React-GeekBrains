import axios from 'axios';

export function fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: axios.get(`http://jsonplaceholder.typicode.com/posts/`).then(res => res.data)
  }
}

export function fetchPost(id) {
  return {
    type: 'FETCH_POST',
    payload: axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.data)
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