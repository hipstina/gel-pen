import { ADD_CSS, CSS_SUBMITTED } from '../types'

const iState = {
  css_styles: '',
  css_submitted: false
}

const EditorReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_CSS:
      return { ...state, css_styles: action.payload }
    case CSS_SUBMITTED:
      return { ...state, css_submitted: !state.css_submitted }
    default:
      return { ...state }
  }
}

export default EditorReducer
