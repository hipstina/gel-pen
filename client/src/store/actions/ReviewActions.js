import {
  __GetReviewsByTheme,
  __CreateReview,
  __DeleteReviewById
} from '../../services/ReviewServices'
import {
  GET_REVIEWS_BY_THEME,
  CREATE_REVIEW,
  DELETE_REVIEW,
  REVIEW_SUBMITTED,
  ADD_REVIEW_INPUT
} from '../types'

export const GetReviewsByTheme = (id) => async (dispatch) => {
  try {
    const reviews = await __GetReviewsByTheme(id)
    dispatch({
      type: GET_REVIEWS_BY_THEME,
      payload: reviews
    })
  } catch (err) {
    console.log(err)
  }
}

export const CreateReview = (req) => async (dispatch) => {
  console.log('CreateReview req', req)
  try {
    const review = await __CreateReview(req)
    console.log('CreateReview res', review)
    dispatch({
      type: CREATE_REVIEW,
      payload: review
    })
  } catch (err) {
    console.log(err)
  }
}

export const DeleteReviewById = (id) => async (dispatch) => {
  try {
    const deleted = await __DeleteReviewById(id)
    dispatch({
      type: DELETE_REVIEW,
      payload: deleted
    })
  } catch (err) {
    console.log(err)
  }
}

export const ReviewSubmitted = () => ({
  type: REVIEW_SUBMITTED // toggle boolean
})

export const AddReviewInput = (inputName, input) => (
  console.log(inputName, input),
  {
    type: ADD_REVIEW_INPUT, // toggle boolean
    payload: { name: inputName, input: input }
  }
)
