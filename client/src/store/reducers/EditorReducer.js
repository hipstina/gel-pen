import { ADD_CSS, CSS_SUBMITTED, ADD_META_DETAILS } from '../types'

const iState = {
  css_styles: {
    text: '#cccccc',
    bg: '#2d2d2d',
    comment: '#efefef',
    punct: '#cccccc',
    tags: '#e2777a',
    func_name: '#e2777a',
    bool: '#f08d49',
    property: '#f8c555',
    selector: '#cc99cd',
    str: '#7ec699',
    operator: '#67cdcc'
  },
  font_type: 'IBM Plex Mono',
  lang: '',
  theme_description: '',
  theme_name: '',
  user_id: 1,
  css_submitted: false
}

const EditorReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_CSS:
      return {
        ...state,
        css_styles: {
          ...state.css_styles,
          [action.payload.name]: action.payload.input
        }
      }
    case ADD_META_DETAILS:
      return {
        ...state,
        [action.payload.name]: action.payload.input,

        css_submitted: false
      }
    case CSS_SUBMITTED:
      return {
        ...state,
        css_submitted: true,
        theme_description: '',
        theme_name: ''
      }
    default:
      return { ...state }
  }
}

export default EditorReducer
