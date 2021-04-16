import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}

const Nav = (props) => {
  return props.authState.authenticated ? (
    <div>
      <NavLink to="/">Gel Pen</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </div>
  ) : (
    <div>
      <NavLink to="/">Gel Pen</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Create an Account</NavLink>
    </div>
  )
}

export default connect(mapStateToProps, null)(Nav)
