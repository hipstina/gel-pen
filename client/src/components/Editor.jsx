import React from 'react'
import { connect } from 'react-redux'
import { AddCSS, CSS_Submitted } from '../store/actions/EditorActions.js'

const mapStateToProps = (state) => {
  return {
    editorState: state.editorState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCssInput: () => dispatch(AddCSS()),
    submitCss: (state) => dispatch(CSS_Submitted(state))
  }
}

const Editor = (props) => {
  const handleChangeEditor = (e) => {
    props.addCssInput()
  }

  const handleSubmitEditor = (e) => {
    e.preventDefault()
    props.submitCss(props.editorState.css_styles)
  }

  return (
    <div>
      Editor
      <form>
        <input type="color" />
        <input type="submit" value="Publish Theme" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
