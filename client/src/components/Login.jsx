import React from 'react'
import { connect } from 'react-redux'
import { AddLogin, LoginUserByUsername } from '../store/actions/AuthActions'

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addLogin: (inputName, input) => dispatch(AddLogin(inputName, input)),
    submitLogin: (login) => dispatch(LoginUserByUsername(login))
  }
}

const Login = (props) => {
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

  const renderLoginError = () => <p>Invalid login. Try again!</p>

  const isValidLogin = () => {
    console.log('props.authState.login_invalid', props.authState.login_invalid)
    props.authState.login_invalid
      ? renderLoginError()
      : props.history.push(`/profile`)
  }

  return (
    <div>
      <h2>Login</h2>
      {props.authState.login_invalid && renderLoginError()}
      <form onSubmit={(e) => handleSubmitLogin(e)}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={props.authState.username}
          onChange={(e) => handleChangeLogin(e)}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={props.authState.password}
          placeholder="password"
          onChange={(e) => handleChangeLogin(e)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
