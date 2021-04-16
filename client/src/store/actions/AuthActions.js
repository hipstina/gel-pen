import {
  __RegisterUser,
  __LoginUserByUsername,
  __CheckSession
} from '../../services/AuthServices'
import {
  SUBMIT_REGISTRATION,
  SUBMIT_LOGIN,
  ADD_REGISTRATION,
  ADD_LOGIN,
  SET_CURRENT_USER,
  INVALID_LOGIN
} from '../types'

export const RegisterUser = (req) => async (dispatch) => {
  try {
    const user = await __RegisterUser(req)
    dispatch({
      type: SUBMIT_REGISTRATION,
      payload: true
    })
  } catch (err) {
    console.log(err)
  }
}

export const LoginUserByUsername = (req) => async (dispatch) => {
  try {
    const user = await __LoginUserByUsername(req)
    console.log('LoginUserByUsername res', user)
    localStorage.setItem('token', user.token)
    dispatch({
      type: SUBMIT_LOGIN,
      payload: true // maybe can return a boolean
    })

    dispatch({
      type: SET_CURRENT_USER,
      payload: user.user.id
    })
    return true
  } catch (err) {
    dispatch({
      type: SUBMIT_LOGIN,
      payload: false // maybe can return a boolean
    })
    dispatch({
      type: INVALID_LOGIN,
      dispatch: true
    })
    return false
  }
}

export const AddLogin = (inputName, input) => ({
  type: ADD_LOGIN,
  payload: { name: inputName, input: input }
})

export const AddRegistration = (inputName, input) => ({
  type: ADD_REGISTRATION,
  payload: { name: inputName, input: input }
})

export const logOut = () => ({
  type: SUBMIT_LOGIN,
  payload: false // maybe can return a boolean
})

export const CheckSession = (token) => async (dispatch) => {
  try {
    const validated = await __CheckSession(token)
    if (token) {
      dispatch({
        type: SUBMIT_LOGIN,
        payload: true
      })

      dispatch({
        type: SET_CURRENT_USER,
        payload: validated.id
      })
    }
  } catch (err) {
    console.log(err)
  }
}
