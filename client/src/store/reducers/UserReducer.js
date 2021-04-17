import {
  GET_USERS,
  TARGET_USER_ID,
  GET_USER_BY_ID,
  GET_THEMES_BY_USER,
  GET_REVIEWSTHEMES_BY_USER,
  INCREMENT_LIKES,
  SET_CURRENT_USER,
  CREATE_THEME
} from '../types'

const iState = {
  all_users: [],
  current_user_id: null,
  selected_user_id: null,
  selected_user_data: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, all_users: action.payload }
    case TARGET_USER_ID:
      return { ...state, selected_user_id: action.payload }
    case GET_USER_BY_ID:
      return { ...state, selected_user_data: action.payload }
    case GET_THEMES_BY_USER:
      return { ...state, selected_user_data: action.payload }
    case GET_REVIEWSTHEMES_BY_USER:
      state.selected_user_data.push(action.payload)
      return { ...state }
    case CREATE_THEME:
      state.selected_user_data.themes.push(action.payload)
      return { ...state }
    case SET_CURRENT_USER:
      return { ...state, current_user_id: action.payload }
    case INCREMENT_LIKES:
      const targetId = state.selected_user_data.themes.filter(
        (theme) => theme.id === action.payload
      )
      targetId[0].likes++
      return { ...state }
    default:
      return { ...state }
  }
}

export default UserReducer
