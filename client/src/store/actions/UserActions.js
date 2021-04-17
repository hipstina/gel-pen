import {
  __GetAllUsers,
  __GetThemesByUser,
  __GetReviewsThemesByUser
} from '../../services/UserServices'
import {
  GET_USERS,
  GET_THEMES_BY_USER,
  GET_REVIEWSTHEMES_BY_USER
} from '../types'

export const GetAllUsers = () => async (dispatch) => {
  try {
    const users = await __GetAllUsers()
    dispatch({
      type: GET_USERS,
      payload: users
    })
  } catch (err) {
    console.log(err)
  }
}

// export const GetUserById = () => async (dispatch) => {
//   try {
//     const user = await __GetUserById()
//     dispatch({
//       type: GET_USER_BY_ID,
//       payload: user
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

export const GetThemesByUser = (id) => async (dispatch) => {
  try {
    const user_themes = await __GetThemesByUser(id)
    dispatch({
      type: GET_THEMES_BY_USER,
      payload: user_themes
    })
  } catch (err) {
    console.log(err, 'Not a valid id')
  }
}

export const GetReviewsThemesByUser = (input) => async (dispatch) => {
  try {
    const themes_reviews = await __GetReviewsThemesByUser()
    dispatch({
      type: GET_REVIEWSTHEMES_BY_USER,
      payload: themes_reviews
    })
  } catch (err) {
    console.log(err)
  }
}
