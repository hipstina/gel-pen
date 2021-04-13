import {
  GET_THEMES,
  GET_THEME_BY_ID,
  CREATE_THEME,
  INCREMENT_LIKES,
  DELETE_THEME_BY_ID
} from '../types'

const iState = {
  themes: [],
  theme_by_id: []
}

const ThemeReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_THEMES:
      return { ...state, themes: action.payload }
    case GET_THEME_BY_ID:
      return { ...state, theme_by_id: action.payload }
    case CREATE_THEME:
      return { ...state, themes: action.payload }
    case INCREMENT_LIKES:
      return { ...state, themes: action.payload }
    case DELETE_THEME_BY_ID:
      return { ...state, themes: action.payload }
    default:
      return { ...state }
  }
}

export default ThemeReducer
