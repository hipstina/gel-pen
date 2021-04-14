import React from 'react'
import { connect } from 'react-redux'
import {
  GetThemesByUser,
  GetReviewsThemesByUser
} from '../store/actions/UserActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(GetReviewsThemesByUser(id))
  }
}

const Profile = (props) => {
  return (
    <div>
      Profile
      {/* 
      CURRENT USER PROFILE: 
      - AVATAR
      - USERNAME
      */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
