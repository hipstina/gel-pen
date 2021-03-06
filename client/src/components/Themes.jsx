import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment-timezone'
import ThemeCard from '../components/ThemeCard'
import { SelectedThemeId, UpdateLikeCount } from '../store/actions/ThemeActions'
import '../styles/Themes.css'

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

  const renderThemes = () => {
    let data
    if (props.page === 'profile') {
      data = props.userState.selected_user_data.themes
    }
    if (props.page === 'browse') {
      data = props.themeState.themes
    }
    if (data)
      return data.length > 0 ? (
        data
          .map((theme, idx) => (
            <div
              key={idx}
              created={theme.created_at}
              theme_name={theme.theme_name}
              likes={theme.likes}
            >
              <ThemeCard
                page={props.page}
                font_type={theme.font_type}
                lang={theme.lang}
                css_styles={theme.css_styles}
                theme_id={theme.id}
                theme_name={theme.theme_name}
                likes={theme.likes}
                created={moment(theme.created_at)
                  .utcOffset(-840)
                  .format('YYYY-MM-DD HH:mm')}
                onClick={(e) => incLikes(e, theme.id, theme.likes)}
                targetTheme={TargetTheme}
              />
            </div>
          ))
          .sort((a, b) => {
            return a.props.likes < b.props.likes
          })
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
    <div className={props.page === 'browse' ? 'preview__grid' : ''}>
      {props.page === 'browse'
        ? renderThemes()
        : props.page === 'profile' &&
          props.authState.authenticated &&
          props.userState.selected_user_data
        ? renderThemes()
        : 'Login to create a profile!'}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes)
