import React from 'react'
import { connect } from 'react-redux'
import {
  AddCSS,
  AddMetaDetails,
  CSS_Submitted
} from '../../store/actions/EditorActions.js'
import { CreateNewTheme } from '../../store/actions/ThemeActions'
import ColorOptions from '../../components/Editor/ColorOptions'
import InputField from '../../components/Editor/InputField'
import FontOptions from '../../components/Editor/FontOptions'
import '../../styles/Editor.css'
import '../../styles/buttons.css'

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
  const { theme_name, theme_description, font_type } = props.editorState
  const { current } = props.userState

  const handleChangeEditor = (e) => {
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
      font_type: props.editorState.font_type,
      lang: props.editorState.lang,
      likes: 0,
      theme_description: props.editorState.theme_description,
      user_id: props.userState.current_user_id
    }
    props.submitCss(newTheme)
    props.toggleSubmitted()
  }

  const setFont = (e) => {
    e.preventDefault()
    props.addMetaDetails('font_type', e.target.value)
  }

  return (
    <div className="editor__wrapper">
      <form onSubmit={handleSubmitEditor}>
        <InputField
          label="Theme title"
          val={theme_name}
          name="theme_name"
          placeholder="Add a title"
          handleChange={handleChangeEditor}
        />
        <InputField
          label="Description"
          val={theme_description}
          name="theme_description"
          placeholder="Add description"
          handleChange={handleChangeEditor}
        />
        <FontOptions
          font_type={font_type}
          setFont={(e) => setFont(e)}
          name="font_type"
        />
        <ColorOptions handleChange={handleChangeEditor} />
        <InputField val={current ? current : 1} type="hidden" />

        {props.authState.authenticated ? (
          <input
            value="Publish Theme"
            type="submit"
            className="btn btn__redirect btn__submit"
          />
        ) : (
          <button
            onClick={() => props.history.push('/register')}
            className="btn btn__redirect"
          >
            Sign up to publish your theme!
          </button>
        )}
        {props.editorState.css_submitted ? (
          <p>Your theme has been published!</p>
        ) : null}
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
