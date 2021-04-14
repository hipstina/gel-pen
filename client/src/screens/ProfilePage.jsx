import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import ThemeCard from '../components/ThemeCard'
import { GetReviewsThemesByUser } from '../store/actions/UserActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: () => dispatch(GetReviewsThemesByUser())
  }
}

const ProfilePage = (props) => {
  return (
    <div>
      ProfilePage
      <Profile />
      <ThemeCard />
      <button onClick={() => props.getThemes()}>
        GET ALL THEMES FOR USER!
      </button>
    </div>
  )
}

export default ProfilePage
