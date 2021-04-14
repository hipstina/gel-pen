import {
  GET_USERS,
  TARGET_USER_ID,
  GET_USER_BY_ID,
  GET_THEMES_BY_USER,
  GET_REVIEWSTHEMES_BY_USER,
  INCREMENT_LIKES
} from '../types'

const iState = {
  all_users: [],
  current_user_data: [],
  selected_user_id: null,
  selected_user_data: []
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, all_users: action.payload }
    case TARGET_USER_ID:
      return { ...state, selected_user_id: action.payload }
    // case GET_USER_BY_ID: //! duplicate
    //   return { ...state, selected_user_data: action.payload }
    case GET_THEMES_BY_USER: //! duplicate
      return { ...state, selected_user_data: action.payload }
    case GET_REVIEWSTHEMES_BY_USER:
      return { ...state, selected_user_data: action.payload }
    case INCREMENT_LIKES:
      const targetId = state.selected_user_data.themes.filter(
        (theme) => theme.id === action.payload
      )
      console.log('targetId', targetId[0].id)
      console.log('action.payload', action.payload)
      targetId[0].likes++

      return { ...state }
    default:
      return { ...state }
  }
}

export default UserReducer
