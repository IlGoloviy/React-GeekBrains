export default function reducer(state = {
    posts: [],
    post: {},
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    
    switch (action.type) {
      case 'FETCH_POSTS': {
        return {...state, fetching: true}
      }
      case 'FETCH_POSTS_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_POSTS_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          posts: action.payload
        }
      }
      case 'FETCH_POST': {
        return {...state, fetching: true}
      }
      case 'FETCH_POST_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_POST_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          post: action.payload
        }
      }
      case 'ADD_POST': {
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        }
      }
      case 'DELETE_POST': {
        return {
          ...state,
          post: {}
        }
      }
      
    }
  
    return state;
  }