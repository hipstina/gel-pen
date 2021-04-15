import {
  GET_THEMES,
  GET_THEME_BY_ID,
  CREATE_THEME,
  DELETE_THEME_BY_ID,
  SET_SELECTED_THEME
} from '../types'

const iState = {
  themes: [],
  theme_by_id: [],
  selected_theme_id: ''
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
      return { ...state, themes: state.themes.push(action.payload) }
    // case INCREMENT_LIKES:
    //   const targetId = state.themes.filter(
    //     (theme) => theme.id === action.payload
    //   )
    //   console.log('targetId', targetId)
    //   // targetId[0].likes++

    //   return { ...state }
    case DELETE_THEME_BY_ID:
      return { ...state, themes: action.payload }
    default:
      return { ...state }
  }
}

export default ThemeReducer
