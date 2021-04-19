import React from 'react'
import Preview from '../components/Preview'
import EditorForm from '../components/Editor/EditorForm'
import '../styles/Editor.css'

const EditorPage = (props) => {
  return (
    <div className="editor__preview__wrapper">
      <EditorForm {...props} />
      <Preview page="editor" />
    </div>
  )
}

export default EditorPage
