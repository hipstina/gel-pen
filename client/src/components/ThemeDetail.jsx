import React, { useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import { connect } from 'react-redux'
import { UpdateLikeCount, DeleteThemeById } from '../store/actions/ThemeActions'
import { GetReviewsByTheme } from '../store/actions/ReviewActions'
import Preview from '../components/Preview'

const mapStateToProps = (state) => {
  return {
    themeState: state.themeState,
    reviewState: state.reviewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTheme: (id) => dispatch(GetReviewsByTheme(id)),
    deleteTheme: (id) => dispatch(DeleteThemeById(id))
  }
}

const ThemeDetails = (props) => {
  useEffect(() => {
    props.getTheme(props.match.params.theme_id)
    // eslint-disable-next-line
  }, [props.reviewState.review_submitted])

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

  return (
    <div>
      <Preview css_styles={props.reviewState.reviews_by_theme.css_styles} />
      {props.reviewState.reviews_by_theme ? (
        <div>
          <h2>{props.reviewState.reviews_by_theme.theme_name}</h2>
          <p>{props.reviewState.reviews_by_theme.theme_description}</p>
          <p>Likes {props.reviewState.reviews_by_theme.likes}</p>
          <div>
            {props.reviewState.reviews_by_theme.reviews
              ? renderReviews()
              : 'Be the first to review!'}
          </div>
          <button onClick={(e) => deleteTheme(e)}>Delete theme</button>
        </div>
      ) : (
        <p>"No details about this theme"</p>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
