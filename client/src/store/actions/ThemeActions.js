import {
  __CreateNewTheme,
  __GetAllThemes,
  __GetThemeById,
  __DeleteThemeById,
  __UpdateLikeCount
} from '../../services/ThemeServices'
import {
  GET_THEMES,
  GET_THEME_BY_ID,
  SET_SELECTED_THEME,
  CREATE_THEME,
  INCREMENT_LIKES,
  DELETE_THEME_BY_ID
} from '../types'

export const SelectedThemeId = (id) => ({
  type: SET_SELECTED_THEME,
  payload: id
})

export const CreateNewTheme = () => async (dispatch) => {
  try {
    const theme = await __CreateNewTheme()
    dispatch({
      type: CREATE_THEME,
      payload: theme
    })
  } catch (err) {
    console.log(err)
  }
}

export const GetAllThemes = () => async (dispatch) => {
  try {
    const themes = await __GetAllThemes()
    dispatch({
      type: GET_THEMES,
      payload: themes
    })
  } catch (err) {
    console.log(err)
  }
}

export const GetThemeById = (id) => async (dispatch) => {
  try {
    const theme = await __GetThemeById(id)
    dispatch({
      type: GET_THEME_BY_ID,
      payload: theme
    })
  } catch (err) {
    console.log(err)
  }
}

export const UpdateLikeCount = (id, req) => async (dispatch) => {
  try {
    let likes = req + 1
    const theme = await __UpdateLikeCount(id, likes)
    console.log('UpdateLikeCount id', id)
    dispatch({
      type: INCREMENT_LIKES,
      payload: id
    })
  } catch (err) {
    console.log(err)
  }
}

export const DeleteThemeById = (id) => async (dispatch) => {
  try {
    const deleted = await __DeleteThemeById(id)
    dispatch({
      type: DELETE_THEME_BY_ID,
      payload: deleted
    })
  } catch (err) {
    console.log(err)
  }
}
