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
        <NavLink exact to="/" className="logo__">
          Gel Pen
        </NavLink>
        <NavLink to="/browse" className="nav__item">
          Browse Themes
        </NavLink>
        <NavLink to="/profile" className="nav__item">
          My Profile
        </NavLink>
      </nav>
    </div>
  ) : (
    <div>
      <nav className="nav__wrapper">
        <NavLink exact to="/" className="logo__">
          Gel Pen
        </NavLink>
        <NavLink to="/login" className="nav__item">
          Login
        </NavLink>
        <NavLink to="/register" className="nav__item">
          Create an Account
        </NavLink>
        <NavLink to="/browse" className="nav__item">
          Browse Themes
        </NavLink>
      </nav>
    </div>
  )
}

export default connect(mapStateToProps, null)(Nav)
