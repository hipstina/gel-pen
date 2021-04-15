import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import ThemeCard from '../components/ThemeCard'
import { GetThemesByUser } from '../store/actions/UserActions'
import { SelectedThemeId, UpdateLikeCount } from '../store/actions/ThemeActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    themeState: state.themeState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getThemes: (id) => dispatch(GetThemesByUser(id)),
    targetTheme: (id) => dispatch(SelectedThemeId(id)),
    incrementLikes: (id, likes) => dispatch(UpdateLikeCount(id, likes))
  }
}

const ProfilePage = (props) => {
  useEffect(() => {
    props.getThemes(1)
  }, [])

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
      <p>"Themes loading"</p>
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
