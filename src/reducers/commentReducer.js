export default function reducer(state = {
    comments: [],
    comment: {},
    fetching: false,
    fetched: false,
    error: null
  }, action) {
    
    switch (action.type) {
      case 'FETCH_COMMENTS': {
        return {...state, fetching: true}
      }
      case 'FETCH_COMMENTS_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_COMMENTS_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          comments: action.payload
        }
      }
      case 'FETCH_COMMENT': {
        return {...state, fetching: true}
      }
      case 'FETCH_COMMENT_REJECTED': {
        return {
          ...state, 
          fetching: false, 
          error: action.payload
        }
      }
      case 'FETCH_COMMENT_FULFILLED': {
        return {
          ...state, 
          fetching: false, 
          fetched: true, 
          comment: action.payload
        }
      }
      
    }
  
    return state;
  }