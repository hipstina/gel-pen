import React from 'react'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import '../styles/Editor.css'

const EditorPage = (props) => {
  return (
    <div className="editor__preview__wrapper">
      <Editor {...props} />
      <Preview />
    </div>
  )
}

export default EditorPage
