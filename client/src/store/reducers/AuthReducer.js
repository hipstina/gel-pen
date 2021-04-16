import {
  SUBMIT_REGISTRATION,
  SUBMIT_LOGIN,
  ADD_REGISTRATION,
  ADD_LOGIN,
  INVALID_LOGIN
} from '../types'

const iState = {
  username: '',
  password: '',
  reg_submitted: false,
  login_submitted: false,
  login_invalid: false,
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
        authenticated: action.payload,
        login_invalid: false
      }
    case ADD_REGISTRATION:
      return {
        ...state,
        [action.payload.name]: action.payload.input
      }
    case INVALID_LOGIN:
      return { ...state, login_invalid: true }
    case ADD_LOGIN:
      return {
        ...state,
        [action.payload.name]: action.payload.input,
        login_invalid: false
      }
    default:
      return { ...state }
  }
}

export default AuthReducer
