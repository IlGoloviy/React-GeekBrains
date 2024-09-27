import axios from 'axios';

export function fetchComments() {
  return function(dispath) {
    dispath({type: 'FETCH_COMMENTS'});

    axios.get(`http://jsonplaceholder.typicode.com/comments`)
      .then(response => {
        dispath({
          type: 'FETCH_COMMENTS_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_COMMENTS_REJECTED',
          payload: err
        })
      })
  }
}

export function fetchComment(id) {
  return function(dispath) {
    dispath({type: 'FETCH_COMMENT'});

    axios.get(`http://jsonplaceholder.typicode.com/comments/${id}`)
      .then(response => {
        dispath({
          type: 'FETCH_COMMENT_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_COMMENT_REJECTED',
          payload: err
        })
      })
  }
}