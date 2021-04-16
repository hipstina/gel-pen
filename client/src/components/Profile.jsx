import React from 'react'
import { connect } from 'react-redux'
import { GetReviewsThemesByUser } from '../store/actions/UserActions'
import { logOut } from '../store/actions/AuthActions'

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
    <div>
      Profile
      {props.authState.authenticated && (
        <button onClick={logOut}>Logout</button>
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
