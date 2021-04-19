import React from 'react'

const PreviewBtns = (props) => {
  const setCodeblock = (e) => {
    switch (e.target.name) {
      case 'js':
        props.setSelect(0)
        break
      case 'jsx':
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
    <div
      className={
        props.page === 'browse'
          ? 'previewBtns__wrapper__browse'
          : props.page === 'editor'
          ? 'previewBtns__wrapper__editor'
          : props.page === 'profile'
          ? 'previewBtns__wrapper__profile'
          : 'previewBtn__wrapper__detail'
      }
    >
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="jsx"
      >
        JSX
      </button>
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="js"
      >
        JS
      </button>
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="python"
      >
        Python
      </button>
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="markdown"
      >
        Markdown
      </button>
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="html"
      >
        HTML
      </button>
      <button
        className="btn preview__btn"
        onClick={(e) => setCodeblock(e)}
        name="css"
      >
        CSS
      </button>
    </div>
  )
}

export default PreviewBtns
