import axios from 'axios';

export function fetchUsers() {
  return {
    type: 'FETCH_USERS',
    payload: 
      axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(res => res.data)
  }
}

export function fetchUser(id) {
  return {
    type: 'FETCH_USER',
    payload: 
      axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.data)
  }
}

export function deleteUser() {
  return {
    type: 'DELETE_USER',
    payload: null
  }
}