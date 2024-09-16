export default function reducer(state = {
  users: [],
  user: {},
  fetching: false,
  fetched: false,
  error: null
}, action) {
  
  switch (action.type) {
    case 'FETCH_USERS': {
      return {...state, fetching: true}
    }
    case 'FETCH_USERS_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        users: action.payload
      }
    }
    case 'FETCH_USER': {
      return {...state, fetching: true}
    }
    case 'FETCH_USER_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'FETCH_USER_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        user: action.payload
      }
    }
    case 'DELETE_USER': {
      return {
        ...state,
        user: {}
      }
    }
    
  }

  return state;
}