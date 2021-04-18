import React from 'react'
import { connect } from 'react-redux'
import { AddLogin, LoginUserByUsername } from '../store/actions/AuthActions'
import InputField from '../components/Editor/InputField'

import '../styles/Forms.css'

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
    if (
      props.submitLogin({
        username: props.authState.username,
        password: props.authState.password
      }) === true
    )
      props.history.push('/profile')
  }

  const renderLoginError = () => <p>Invalid login. Try again!</p>

  return (
    <div>
      <h2>Login</h2>
      <p className="timeout__invalid">
        {props.authState.login_invalid && renderLoginError()}
      </p>
      <form onSubmit={(e) => handleSubmitLogin(e)}>
        <InputField
          label="Username "
          name="username"
          placeholder="username"
          val={props.authState.username}
          handleChange={handleChangeLogin}
        />
        <InputField
          label="Password "
          name="password"
          placeholder="password"
          val={props.authState.password}
          handleChange={handleChangeLogin}
          type="password"
        />

        <input type="submit" value="Login" className="btn btn__redirect" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
