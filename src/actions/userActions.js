import axios from 'axios';

export function fetchUsers() {
  return function(dispath) {
    dispath({type: 'FETCH_USERS'});

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        dispath({
          type: 'FETCH_USERS_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_USERS_REJECTED',
          payload: err
        })
      })
  }
}

export function fetchUser(id) {
  return function(dispath) {
    dispath({type: 'FETCH_USER'});

    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        dispath({
          type: 'FETCH_USER_FULFILLED',
          payload: response.data
        })
      })
      .catch(err => {
        dispath({
          type: 'FETCH_USER_REJECTED',
          payload: err
        })
      })
  }
}

export function deleteUser() {
  return {
    type: 'DELETE_USER',
    payload: null
  }
}