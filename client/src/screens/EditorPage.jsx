import React from 'react'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import '../styles/Editor.css'

const EditorPage = () => {
  return (
    <div className="editor__preview__wrapper">
      <Editor />
      <Preview />
    </div>
  )
}

export default EditorPage
