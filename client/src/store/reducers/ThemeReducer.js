import {
  GET_THEMES,
  GET_THEME_BY_ID,
  CREATE_THEME,
  INCREMENT_LIKES,
  DELETE_THEME_BY_ID,
  SET_SELECTED_THEME
} from '../types'

const iState = {
  themes: [],
  theme_by_id: [],
  selected_theme_id: null
}

const ThemeReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_THEMES:
      return { ...state, themes: action.payload }
    case SET_SELECTED_THEME:
      return { ...state, selected_theme_id: action.payload }
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
