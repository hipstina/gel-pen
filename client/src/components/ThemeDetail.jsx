import React from 'react'
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
    themeState: state.themeState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTheme: () => dispatch(GetThemeById()),
    deleteTheme: (id) => dispatch(DeleteThemeById(id)),
    incrementLikes: (id, likes) => dispatch(UpdateLikeCount(id, likes)),
    getReview: (id) => dispatch(GetReviewsByTheme(id)),
    deleteReview: (id) => dispatch(DeleteReviewById(id)),
    addReviewInput: (inputName, input) =>
      dispatch(AddReviewInput(inputName, input)),
    reviewSubmit: () => dispatch(ReviewSubmitted())
  }
}

const ThemeDetails = () => {
  return (
    <div>
      ThemeDetails
      <button>CLICK</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
