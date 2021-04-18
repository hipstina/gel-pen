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
  INVALID_LOGIN,
  IS_THEME_AUTHOR
} from '../types'

export const RegisterUser = (req) => async (dispatch) => {
  try {
    await __RegisterUser(req)
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
    localStorage.setItem('token', user.token)
    dispatch({
      type: SUBMIT_LOGIN,
      payload: true
    })

    dispatch({
      type: SET_CURRENT_USER,
      payload: user.user.id
    })
    return true
  } catch (err) {
    dispatch({
      type: SUBMIT_LOGIN,
      payload: false
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

export const logOut = () => (
  {
    type: IS_THEME_AUTHOR,
    payload: false
    // eslint-disable-next-line no-sequences
  },
  {
    type: SUBMIT_LOGIN,
    payload: false
  }
)

export const CheckSession = (token) => async (dispatch) => {
  try {
    const validated = await __CheckSession(token)
    if (token && validated) {
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
