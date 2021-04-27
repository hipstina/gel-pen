import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import { connect } from 'react-redux'
import { DeleteThemeById, IsThemeAuthor } from '../store/actions/ThemeActions'
import { GetReviewsByTheme } from '../store/actions/ReviewActions'
import Preview from '../components/Preview'
import ReviewForm from '../components/ReviewForm'

const mapStateToProps = (state) => {
  return {
    themeState: state.themeState,
    reviewState: state.reviewState,
    authState: state.authState,
    userState: state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTheme: (id) => dispatch(GetReviewsByTheme(id)),
    deleteTheme: (id) => dispatch(DeleteThemeById(id)),
    isThemeAuthor: (author) => dispatch(IsThemeAuthor(author))
  }
}

const ThemeDetails = (props) => {
  useEffect(() => {
    props.getTheme(props.match.params.theme_id)
    isThemeAuthor()
    // eslint-disable-next-line
  }, [
    props.themeState.themes,
    props.reviewState.review_submitted,
    props.match.params.theme_id
  ])

  const renderReviews = () => {
    return props.reviewState.reviews_by_theme.reviews ? (
      props.reviewState.reviews_by_theme.reviews.map((review, idx) => (
        <ReviewCard
          key={idx}
          review_title={review.title}
          review_content={review.content}
        />
      ))
    ) : (
      <p>'No review data to render'</p>
    )
  }

  const deleteTheme = (e) => {
    e.preventDefault()
    props.deleteTheme(props.match.params.theme_id)
  }

  const isThemeAuthor = () => {
    if (props.themeState.themes.length > 0) {
      let selectedTheme = props.themeState.themes.filter((theme) =>
        theme.id === parseInt(props.match.params.theme_id) ? true : false
      )

      if (selectedTheme[0]) {
        let author =
          selectedTheme[0].user_id === props.userState.current_user_id
            ? true
            : false

        props.isThemeAuthor(author)
      }
    }
  }

  return (
    <div className="theme__detail">
      {props.themeState.is_deleted ? (
        <h3>This theme has been deleted!</h3>
      ) : (
        props.reviewState.reviews_by_theme && (
          <Preview css_styles={props.reviewState.reviews_by_theme.css_styles} />
        )
      )}
      {props.reviewState.reviews_by_theme ? (
        <div className="theme__details__sidebar">
          <h2>{props.reviewState.reviews_by_theme.theme_name}</h2>
          <p className="theme__details__description">
            {props.reviewState.reviews_by_theme.theme_description}
          </p>
          {/* <p>Likes {props.reviewState.reviews_by_theme.likes}</p> */}
          {props.themeState.is_author && (
            <button onClick={(e) => deleteTheme(e)} className="btn btn__delete">
              Delete theme
            </button>
          )}
          <div className="theme__details__reviews">
            <br />
            <h2 className="reviews__label">Reviews:</h2>

            {props.reviewState.reviews_by_theme.reviews
              ? renderReviews()
              : 'Be the first to review!'}
          </div>
          <ReviewForm {...props} />
        </div>
      ) : (
        <div>
          <p>This theme probably doesn't exist anymore.</p>
          <Link to="/browse">
            <h4>Browse more themes here.</h4>
          </Link>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
