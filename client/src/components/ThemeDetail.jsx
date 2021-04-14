import React, { useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import { connect } from 'react-redux'
import { UpdateLikeCount, DeleteThemeById } from '../store/actions/ThemeActions'
import {
  GetReviewsByTheme,
  DeleteReviewById,
  AddReviewInput,
  ReviewSubmitted
} from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    themeState: state.themeState,
    reviewState: state.reviewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTheme: (id) => dispatch(GetReviewsByTheme(id)),
    deleteTheme: (id) => dispatch(DeleteThemeById(id)),
    deleteReview: (id) => dispatch(DeleteReviewById(id)),
    addReviewInput: (inputName, input) =>
      dispatch(AddReviewInput(inputName, input)),
    reviewSubmit: () => dispatch(ReviewSubmitted())
  }
}

const ThemeDetails = (props) => {
  useEffect(() => {
    props.getTheme(props.themeState.selected_theme_id)
  }, [])

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

  return (
    <div>
      ThemeDetails
      {props.reviewState.reviews_by_theme ? (
        <div>
          <h2>{props.reviewState.reviews_by_theme.theme_name}</h2>
          <p>
            <em>{props.reviewState.reviews_by_theme.theme_description}</em>
          </p>
          <p>Likes {props.reviewState.reviews_by_theme.likes}</p>
          <div>
            {props.reviewState.reviews_by_theme.reviews
              ? renderReviews()
              : 'Be the first to review!'}
          </div>
        </div>
      ) : (
        <p>"No details about this theme"</p>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
