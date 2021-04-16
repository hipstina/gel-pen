import React from 'react'
import { connect } from 'react-redux'
import { RegisterUser, AddRegistration } from '../store/actions/AuthActions'

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addLogin: (inputName, input) => dispatch(AddRegistration(inputName, input)),
    submitLogin: (login) => dispatch(RegisterUser(login))
  }
}

const Register = (props) => {
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
      Register
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

        <input type="submit" value="Sign up" />
      </form>
      {props.authState.reg_submitted && <div>Go login!</div>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
