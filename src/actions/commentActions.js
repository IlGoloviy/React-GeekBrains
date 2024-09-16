import axios from 'axios';

export function fetchComments() {
  return {
    type: 'FETCH_COMMENTS',
    payload: 
      axios.get(`http://jsonplaceholder.typicode.com/comments`)
      .then(res => res.data)
  }
}

export function fetchComment(id) {
  return {
    type: 'FETCH_COMMENT',
    payload: 
      axios.get(`http://jsonplaceholder.typicode.com/comments/${id}`)
      .then(res => res.data)
  }
}