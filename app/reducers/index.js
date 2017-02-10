import { combineReducers } from 'redux';
import * as navigationReducer from './navigation'
import * as userReducer from './user'

export default combineReducers(Object.assign(
  navigationReducer,
  userReducer
));
