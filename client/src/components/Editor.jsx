import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  AddCSS,
  AddMetaDetails,
  CSS_Submitted
} from '../store/actions/EditorActions.js'
import { CreateNewTheme } from '../store/actions/ThemeActions'

const mapStateToProps = (state) => {
  return {
    editorState: state.editorState,
    userState: state.userState,
    authState: state.authState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCssInput: (inputName, inputval) => dispatch(AddCSS(inputName, inputval)),
    addMetaDetails: (inputName, inputval) =>
      dispatch(AddMetaDetails(inputName, inputval)),
    submitCss: (input) => dispatch(CreateNewTheme(input)),
    toggleSubmitted: () => dispatch(CSS_Submitted())
  }
}

const Editor = (props) => {
  const { theme_name, theme_description } = props.editorState

  const handleChangeEditor = (e) => {
    let styleStr = stringifyStyle()

    // INSERT UPDATED STYLE OBJECT
    document.styleSheets[1].insertRule(`:root{${styleStr}}`, 0)
    // DELETE OUTDATED STYLE OBJECT
    document.styleSheets[1].deleteRule(1)

    if (
      e.target.name === 'theme_description' ||
      e.target.name === 'theme_name'
    ) {
      props.addMetaDetails(e.target.name, e.target.value)
    } else props.addCssInput(e.target.name, e.target.value)
  }

  const handleSubmitEditor = (e) => {
    e.preventDefault()
    const newTheme = {
      css_styles: props.editorState.css_styles,
      theme_name: props.editorState.theme_name,
      likes: 0,
      theme_description: props.editorState.theme_description,
      user_id: props.userState.current_user_id
    }
    props.submitCss(newTheme)
    props.toggleSubmitted()
  }

  const stringifyStyle = () => {
    // CONVERT STYLES OBJ TO STRING
    let obj = props.editorState.css_styles
    let styleStr = ''
    for (let selector in obj) {
      if (obj.hasOwnProperty(selector)) {
        styleStr += '--' + selector + ':' + obj[selector] + ' '
      }
    }

    return styleStr
  }

  const renderColorOptions = () => {
    // CONVERT STYLES OBJ TO ARR
    let obj = props.editorState.css_styles
    let styleArr = []
    for (let selector in obj) {
      if (obj.hasOwnProperty(selector)) {
        styleArr.push([selector, obj[selector]])
      }
    }
    return styleArr.map((s, idx) => (
      <div key={idx}>
        <label>{s[0]} </label>
        <input
          type="color"
          name={s[0]}
          value={s[1]}
          onChange={(e) => handleChangeEditor(e)}
        />
      </div>
    ))
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmitEditor(e)}>
        <label>Theme name: </label>
        <input
          type="text"
          name="theme_name"
          value={theme_name}
          placeholder="raging theme"
          onChange={(e) => handleChangeEditor(e)}
        />
        <label>Theme description: </label>
        <textarea
          type="text"
          name="theme_description"
          value={theme_description}
          placeholder="Something for the midday coders"
          onChange={(e) => handleChangeEditor(e)}
        />
        {renderColorOptions()}
        <input
          type="hidden"
          name="user_id"
          value={props.userState.current_user_id}
        />
        {props.authState.authenticated ? (
          <input type="submit" value="Publish Theme" />
        ) : (
          <button
            value="Publish Theme"
            onClick={() => props.history.push('/register')}
          >
            Sign up to publish your theme!
          </button>
        )}
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
