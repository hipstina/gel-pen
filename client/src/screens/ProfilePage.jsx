import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import ThemeCard from '../components/ThemeCard'
import { GetThemesByUser } from '../store/actions/UserActions'
import { GetReviewsByTheme } from '../store/actions/ReviewActions'
import { GetThemeById, SelectedThemeId } from '../store/actions/ThemeActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    themeState: state.themeState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: (id) => dispatch(GetThemesByUser(id)),
    targetTheme: (id) => dispatch(SelectedThemeId(id))
  }
}

const ProfilePage = (props) => {
  useEffect(() => {
    props.getThemes(1)
  }, [props.getThemes])

  const targetTheme = (id) => {
    props.targetTheme(id)
    // redirect to them details page
    props.history.push(`/themes/${id}`)
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
      {props.userState.selected_user_data
        ? renderUserThemes()
        : 'no themes yet!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
