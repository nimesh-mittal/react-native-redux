import * as types from './types'
import ReactNative from 'react-native'

export function navigate(action) {
  return (dispatch, getState) => {
    dispatch(navigateForward(action))
  }
}

function navigateForward(state) {
  return {
    type: types.NAVIGATION_FORWARD,
    state
  }
}

export function navigateBack() {
  return (dispatch, getState) => {
    dispatch({
      type: types.NAVIGATION_BACK
    })
  }
}
