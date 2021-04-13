import {
  GET_REVIEWS_BY_THEME,
  CREATE_REVIEW,
  DELETE_REVIEW,
  REVIEW_SUBMITTED,
  ADD_REVIEW_INPUT
} from '../types'

const iState = {
  review_input: '',
  reviews_by_theme: [],
  review_submitted: false
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_REVIEWS_BY_THEME:
      return { ...state, reviews_by_theme: action.payload }
    case CREATE_REVIEW:
      return { ...state, reviews_by_theme: action.payload }
    case DELETE_REVIEW:
      return { ...state, reviews_by_theme: action.payload }
    case REVIEW_SUBMITTED:
      return { ...state, review_submitted: !state.review_submitted }
    case ADD_REVIEW_INPUT:
      return { ...state, review_input: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewReducer
