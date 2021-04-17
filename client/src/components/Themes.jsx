import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ThemeCard from '../components/ThemeCard'
import { SelectedThemeId, UpdateLikeCount } from '../store/actions/ThemeActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    themeState: state.themeState,
    authState: state.authState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    targetTheme: (id) => dispatch(SelectedThemeId(id)),
    incrementLikes: (id, likes) => dispatch(UpdateLikeCount(id, likes))
  }
}

const Themes = (props) => {
  const TargetTheme = (e, id) => {
    e.preventDefault()
    props.targetTheme(id)
    props.history.push(`/themes/${id}`)
  }

  const incLikes = (e, id, likes) => {
    e.preventDefault()
    props.incrementLikes(id, likes)
  }

  const renderUserThemes = () => {
    return props.userState.selected_user_data.themes.length > 0 ? (
      props.userState.selected_user_data.themes
        .map((theme, idx) => (
          <div key={idx} created={theme.created_at}>
            <p>All of my themes!</p>
            <ThemeCard
              css_styles={theme.css_styles}
              theme_id={theme.id}
              themeName={theme.theme_name}
              likes={theme.likes}
              created={theme.created_at}
              onClick={(e) => incLikes(e, theme.id, theme.likes)}
            />
            <button onClick={(e) => TargetTheme(e, theme.id)}>+</button>
          </div>
        ))
        .sort((a, b) => a.props.created < b.props.created)
    ) : (
      <div>
        <h3>You have no themes! </h3>
        <Link to="/">
          <h3>Create one now.</h3>
        </Link>
      </div>
    )
  }
  return (
    <div>
      Themes container
      {props.authState.authenticated && props.userState.selected_user_data
        ? renderUserThemes()
        : 'Login to create a profile!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes)
