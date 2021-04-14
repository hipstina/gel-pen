import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetThemeById,
  UpdateLikeCount,
  DeleteThemeById
} from '../store/actions/ThemeActions'
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
    incrementLikes: (id, likes) => dispatch(UpdateLikeCount(id, likes)),
    getReview: (id) => dispatch(GetReviewsByTheme(id)),
    deleteReview: (id) => dispatch(DeleteReviewById(id)),
    addReviewInput: (inputName, input) =>
      dispatch(AddReviewInput(inputName, input)),
    reviewSubmit: () => dispatch(ReviewSubmitted())
  }
}

const ThemeDetails = (props) => {
  console.log('selecte theme id', props.themeState.selected_theme_id)
  console.log('fetched them by id', props.themeState.theme_by_id)
  useEffect(() => {
    console.log('USEEFFECT on THEMEDETAIL')
    props.getTheme(props.themeState.selected_theme_id)
  }, [])

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
        </div>
      ) : (
        <p>"No details about this theme"</p>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
