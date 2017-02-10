import * as types from './types'
import Api from '../lib/api'

export function authenticate(user) {
  return (dispatch, getState) => {
    if(user.username != '' && user.password != '') {
      let route = '/posts/1';
      return Api.get(route).then(resp => {        
        dispatch(setUser(user));
        return resp;
      }).catch( (ex) => {
      });
    }
  }
}

export function setUser(user) {
  return {
    type: types.SET_USER,
    user
  }
}
