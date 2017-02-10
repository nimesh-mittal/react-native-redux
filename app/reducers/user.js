import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const loggedInUser = createReducer(null, {
  [types.SET_USER](state, action) {
    let newState = {};
    newState = Object.assign(action.user);
    return newState;
  }
});
