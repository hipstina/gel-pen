import {
  SUBMIT_REGISTRATION,
  SUBMIT_LOGIN,
  ADD_REGISTRATION,
  ADD_LOGIN
} from '../types'

const iState = {
  username: '',
  password: '',
  reg_submitted: false,
  login_submitted: false,
  authenticated: false
}

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      return {
        ...state,
        reg_submitted: action.payload
      }
    case SUBMIT_LOGIN:
      return {
        ...state,
        login_submitted: !state.login_submitted,
        authenticated: action.payload
        // TODO: reset login
      }
    case ADD_REGISTRATION:
      return {
        ...state,
        [action.payload.name]: action.payload.input
      }
    case ADD_LOGIN:
      return {
        ...state,
        [action.payload.name]: action.payload.input
      }
    default:
      return { ...state }
  }
}

export default AuthReducer
