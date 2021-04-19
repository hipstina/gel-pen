import React from 'react'
import { connect } from 'react-redux'
import { GetReviewsThemesByUser } from '../store/actions/UserActions'
import { logOut } from '../store/actions/AuthActions'
import '../styles/Profile.css'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    authState: state.authState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(GetReviewsThemesByUser(id)),
    logOut: () => dispatch(logOut())
  }
}

const Profile = (props) => {
  const logOut = () => {
    localStorage.clear()
    props.logOut()
    props.history.push(`/login`)
  }
  return (
    <div className="profile__wrapper">
      <div className="profile__avatar"></div>
      <span className="profile__username">
        {props.authState.username
          ? props.authState.username
          : props.userState.selected_user_data.username}
      </span>
      {props.authState.authenticated && (
        <button onClick={logOut} className="btn profile__logout btn__redirect">
          Logout
        </button>
      )}
      {/* 
      CURRENT USER PROFILE: 
      - AVATAR
      - USERNAME
      */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
