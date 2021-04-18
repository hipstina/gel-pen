import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Nav.css'

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  }
}

const Nav = (props) => {
  return props.authState.authenticated ? (
    <div>
      <nav className="nav__wrapper">
        <NavLink to="/">Gel Pen</NavLink>
        <NavLink to="/browse">Browse Themes</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </nav>
    </div>
  ) : (
    <div>
      <nav className="nav__wrapper">
        <NavLink to="/">Gel Pen</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Create an Account</NavLink>
        <NavLink to="/browse">Browse Themes</NavLink>
      </nav>
    </div>
  )
}

export default connect(mapStateToProps, null)(Nav)
