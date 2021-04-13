import {
  __RegisterUser,
  __LoginUserByUsername
} from '../../services/UserServices'
import {
  SUBMIT_REGISTRATION,
  SUBMIT_LOGIN,
  ADD_REGISTRATION,
  ADD_LOGIN
} from '../types'

export const RegisterUser = () => async (dispatch) => {
  try {
    const user = await __RegisterUser()
    dispatch({
      type: SUBMIT_REGISTRATION,
      payload: user
    })
  } catch (err) {
    console.log(err)
  }
}

export const LoginUserByUsername = () => async (dispatch) => {
  try {
    const user = await __LoginUserByUsername()
    dispatch({
      type: SUBMIT_LOGIN,
      payload: user
    })
  } catch (err) {
    console.log(err)
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
