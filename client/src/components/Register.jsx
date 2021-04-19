import React from 'react'
import { connect } from 'react-redux'
import { RegisterUser, AddRegistration } from '../store/actions/AuthActions'
import '../styles/Forms.css'
import InputField from '../components/Editor/InputField'

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
    props.history.push('/login')
  }

  return (
    <div className="form__wrapper">
      <h2>Register</h2>
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

        <input type="submit" value="Sign up" className="btn btn__redirect" />
      </form>
      <br />
      <br />
      <br />
      <br />
      <h3>Already have an account?</h3>
      <button
        onClick={() => props.history.push('/login')}
        className="btn btn__redirect"
      >
        Sign in
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
