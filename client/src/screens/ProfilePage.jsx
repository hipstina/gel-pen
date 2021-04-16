import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import ThemeCard from '../components/ThemeCard'
import { GetThemesByUser } from '../store/actions/UserActions'
import { SelectedThemeId, UpdateLikeCount } from '../store/actions/ThemeActions'
import { CheckSession } from '../store/actions/AuthActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    themeState: state.themeState,
    authState: state.authState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: (id) => dispatch(GetThemesByUser(id)),
    targetTheme: (id) => dispatch(SelectedThemeId(id)),
    incrementLikes: (id, likes) => dispatch(UpdateLikeCount(id, likes)),
    checkSession: (input) => dispatch(CheckSession(input))
  }
}

const ProfilePage = (props) => {
  useEffect(() => {
    props.userState.current_user_id &&
      props.getThemes(props.userState.current_user_id)
    const token = localStorage.getItem('token')
    props.checkSession(token)
  }, [props.userState.current_user_id])

  const targetTheme = (e, id) => {
    e.preventDefault()
    props.targetTheme(id)
    props.history.push(`/themes/${id}`)
  }

  const incLikes = (e, id, likes) => {
    e.preventDefault()
    props.incrementLikes(id, likes)
  }

  const renderUserThemes = () => {
    return props.userState.selected_user_data.themes ? (
      props.userState.selected_user_data.themes.map((theme, idx) => (
        <div key={idx}>
          <p>All of my themes!</p>
          <ThemeCard
            css_styles={theme.css_styles}
            theme_id={theme.id}
            themeName={theme.theme_name}
            likes={theme.likes}
            created={theme.created_at}
            onClick={(e) => incLikes(e, theme.id, theme.likes)}
          />
          <button onClick={(e) => targetTheme(e, theme.id)}>+</button>
        </div>
      ))
    ) : (
      <p>no themes yet!</p>
    )
  }
  return (
    <div>
      <Profile />
      {props.authState.authenticated
        ? renderUserThemes()
        : 'Login to create a profile!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
