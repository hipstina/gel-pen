import React from 'react'
import { connect } from 'react-redux'
import {
  DeleteReviewById,
  AddReviewInput,
  ReviewSubmitted,
  CreateReview
} from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    reviewState: state.reviewState,
    authState: state.authState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (id) => dispatch(DeleteReviewById(id)),
    addReviewInput: (inputName, input) =>
      dispatch(AddReviewInput(inputName, input)),
    createReview: (input) => dispatch(CreateReview(input)),
    reviewSubmit: () => dispatch(ReviewSubmitted())
  }
}

const ReviewForm = (props) => {
  const handleChangeReview = (e) => {
    props.addReviewInput(e.target.name, e.target.value)
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    const review = {
      title: props.reviewState.review_input.title,
      content: props.reviewState.review_input.content,
      theme_id: props.match.params.theme_id
    }
    props.createReview(review)
    props.reviewSubmit()
  }

  return (
    <div>
      <h3>Submit a review:</h3>
      {props.authState.authenticated ? (
        <form onSubmit={(e) => handleSubmitReview(e)}>
          {/* TODO: CALCULATE CURRENT USER TO AUTOFILL AUTHENTICATED USER */}
          <input type="hidden" placeholder="current_user avatar" />
          <input type="hidden" placeholder="current_user username" />
          <input
            type="text"
            name="title"
            placeholder="review title!"
            onChange={(e) => handleChangeReview(e)}
          />
          <input
            type="text"
            name="content"
            placeholder="what a super cool theme!"
            onChange={(e) => handleChangeReview(e)}
          />

          <input
            type="hidden"
            name="theme_id"
            value={props.match.params.theme_id}
            onChange={(e) => handleChangeReview(e)}
          />
          <input type="submit" value="Submit Review" />
        </form>
      ) : (
        <button
          value="Register"
          onClick={() => props.history.push('/register')}
        >
          Sign up to leave a review!
        </button>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
