import React from 'react'

const PreviewBtns = (props) => {
  const setCodeblock = (e) => {
    switch (e.target.name) {
      case 'jsx':
        props.setSelect(0)
        break
      case 'js':
        props.setSelect(1)
        break
      case 'python':
        props.setSelect(2)
        break
      case 'markdown':
        props.setSelect(3)
        break
      case 'html':
        props.setSelect(4)
        break
      case 'css':
        props.setSelect(5)
        break
      default:
        props.setSelect(0)
        break
    }
  }

  return (
    <div>
      <button onClick={(e) => setCodeblock(e)} name="jsx">
        JSX
      </button>
      <button onClick={(e) => setCodeblock(e)} name="js">
        JS
      </button>
      <button onClick={(e) => setCodeblock(e)} name="python">
        Python
      </button>
      <button onClick={(e) => setCodeblock(e)} name="markdown">
        Markdown
      </button>
      <button onClick={(e) => setCodeblock(e)} name="html">
        HTML
      </button>
      <button onClick={(e) => setCodeblock(e)} name="css">
        CSS
      </button>
    </div>
  )
}

export default PreviewBtns
