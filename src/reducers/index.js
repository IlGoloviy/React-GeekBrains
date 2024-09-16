import { combineReducers } from 'redux';

import posts from './postReducer';
import users from './userReducer';
import comments from './commentReducer';

export default combineReducers({
  users,
  posts,
  comments
})