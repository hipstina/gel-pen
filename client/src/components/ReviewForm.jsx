import React from 'react'
import { connect } from 'react-redux'
import {
  DeleteReviewById,
  AddReviewInput,
  ReviewSubmitted
} from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    reviewState: state.reviewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(DeleteReviewById(id)),
    addReviewInput: (inputName, input) =>
      dispatch(AddReviewInput(inputName, input)),
    reviewSubmit: () => dispatch(ReviewSubmitted())
  }
}

const ReviewForm = (props) => {
  return (
    <div>
      <form>
        {/* TODO: CALCULATE CURRENT USER TO AUTOFILL USER FIELDS */}
        <input type="text" placeholder="current_user avatar" />
        <input type="text" placeholder="current_user username" />
        <input type="text" value="" placeholder="what a super cool theme!" />
        <input type="submit" value="Submit Review" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
