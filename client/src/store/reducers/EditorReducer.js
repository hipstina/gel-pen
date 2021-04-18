import { ADD_CSS, CSS_SUBMITTED, ADD_META_DETAILS } from '../types'

const iState = {
  css_styles: {
    text: '#cccccc',
    bg: '#2d2d2d',
    comment: '#FFF',
    punct: '#cccccc',
    tags: '#e2777a',
    // attr_name: '#e2777a',
    func_name: '#e2777a',
    bool: '#f08d49',
    // number: '#f08d49',
    // func: '#f08d49',
    property: '#f8c555',
    // class_name: '#f8c555',
    // constant: '#f8c555',
    selector: '#cc99cd',
    // keyword: '#cc99cd',
    str: '#7ec699',
    // charact: '#7ec699',
    // attr_value: '#7ec699',
    // regx: '#7ec699',
    // variable: '#7ec699',
    operator: '#67cdcc'
    // entity: '#67cdcc',
    // url: '#67cdcc'
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
