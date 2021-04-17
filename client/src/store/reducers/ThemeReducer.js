import {
  GET_THEMES,
  GET_THEME_BY_ID,
  DELETE_THEME_BY_ID,
  SET_SELECTED_THEME,
  CREATE_THEME,
  IS_THEME_AUTHOR,
  INCREMENT_LIKES
} from '../types'

const iState = {
  themes: [],
  theme_by_id: [],
  selected_theme_id: '',
  is_author: false,
  is_deleted: false
}

const ThemeReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_THEMES:
      return { ...state, themes: action.payload }
    case CREATE_THEME:
      state.themes.push(action.payload)
      return { ...state }
    case IS_THEME_AUTHOR:
      return {
        ...state,
        is_author: action.payload
      }
    case SET_SELECTED_THEME:
      return { ...state, selected_theme_id: action.payload }
    case GET_THEME_BY_ID:
      return { ...state, theme_by_id: action.payload }
    case INCREMENT_LIKES:
      const targetId = state.themes.filter(
        (theme) => theme.id === action.payload
      )
      targetId[0].likes++
      return { ...state }
    case DELETE_THEME_BY_ID:
      let updated_themes = state.themes.filter(
        (theme) => theme.id !== action.payload.payload
      )

      return { ...state, themes: updated_themes, is_deleted: true }
    default:
      return { ...state }
  }
}

export default ThemeReducer
