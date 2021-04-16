import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  AddLogin,
  LoginUserByUsername,
  logOut,
  CheckSession
} from '../store/actions/AuthActions'

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    userState: state.userState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addLogin: (inputName, input) => dispatch(AddLogin(inputName, input)),
    submitLogin: (login) => dispatch(LoginUserByUsername(login)),
    logOut: () => dispatch(logOut()),
    checkSession: (input) => dispatch(CheckSession(input))
  }
}

const Login = (props) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    props.checkSession(token)
  }, [])

  const logOut = () => {
    localStorage.clear()
    props.logOut()
  }

  const handleChangeLogin = (e) => {
    props.addLogin(e.target.name, e.target.value)
  }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    props.submitLogin({
      username: props.authState.username,
      password: props.authState.password
    })
  }

  return (
    <div>
      Login
      {props.authState.authenticated ? (
        <div>
          <h3>You are logged in.</h3>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmitLogin(e)}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleChangeLogin(e)}
          />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleChangeLogin(e)}
          />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
