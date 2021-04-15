import { ADD_CSS, ADD_META_DETAILS, CSS_SUBMITTED } from '../types'

export const AddCSS = (inputName, input) => ({
  type: ADD_CSS,
  payload: { name: inputName, input: input }
})

export const CSS_Submitted = (inputName, input) => ({
  type: CSS_SUBMITTED // toggle boolean,
})

export const AddMetaDetails = (inputName, input) => ({
  type: ADD_META_DETAILS,
  payload: { name: inputName, input: input }
})
