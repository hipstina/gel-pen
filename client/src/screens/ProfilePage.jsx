import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import ThemeCard from '../components/ThemeCard'
import { GetThemesByUser } from '../store/actions/UserActions'
import { GetReviewsByTheme } from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: (id) => dispatch(GetThemesByUser(id)),
    targetTheme: (id) => dispatch(GetReviewsByTheme(id))
  }
}

const ProfilePage = (props) => {
  useEffect(() => {
    props.getThemes(1)
  }, [props.getThemes])

  const targetTheme = (id) => {
    props.targetTheme(id)
    // redirect to them details page
  }

  const renderUserThemes = () => {
    return props.userState.selected_user_data.themes ? (
      props.userState.selected_user_data.themes.map((theme, idx) => (
        <div key={idx} onClick={() => targetTheme(theme.id)}>
          <ThemeCard
            themeName={theme.theme_name}
            likes={theme.likes}
            created={theme.created_at}
          />
        </div>
      ))
    ) : (
      <p>"Nothing to map"</p>
    )
  }
  return (
    <div>
      ProfilePage
      <Profile />
      {/* <button onClick={() => props.getThemes(1)}>
        GET ALL THEMES FOR USER!
      </button> */}
      {props.userState.selected_user_data
        ? renderUserThemes()
        : 'no themes yet!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
