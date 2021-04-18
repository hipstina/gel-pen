import React from 'react'
import Preview from '../components/Preview'
import EditorForm from '../components/Editor/EditorForm'
import '../styles/Editor.css'

const EditorPage = (props) => {
  return (
    <div className="editor__preview__wrapper">
      <EditorForm {...props} />
      <Preview />
    </div>
  )
}

export default EditorPage
