import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'
import '../styles/Preview.css'
import { connect } from 'react-redux'
import { AddCSS, CSS_Submitted } from '../store/actions/EditorActions.js'
import { JS, JSX, PYTHON, MARKDOWN, HTML, CSS } from '../constants/codeblocks'

const mapStateToProps = (state) => {
  return {
    editorState: state.editorState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCssInput: (inputName, inputval) => dispatch(AddCSS(inputName, inputval)),
    submitCss: (state) => dispatch(CSS_Submitted(state))
  }
}

const Preview = (props) => {
  console.log('Preview props', props)
  const [select, setSelect] = useState(0)

  let codeSnippet = [JS, JSX, PYTHON, MARKDOWN, HTML, CSS]

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [select])

  // CONDITIONALLY DESCTRUCTURE STYLE OBJ PROPS
  // DEFAULT TO CURRENT STATES STYLE OBJ
  const {
    text,
    bg,
    comment,
    punct,
    tags,
    attr_name,
    func_name,
    bool,
    number,
    func,
    property,
    class_name,
    constant,
    selector,
    keyword,
    str,
    charact,
    attr_value,
    regx,
    variable,
    operator,
    entity,
    url
  } = props.css_styles ? props.css_styles : props.editorState.css_styles

  // const { font_type } = props.font_type
  //   ? props.font_type
  //   : props.editorState.font_type

  // const { lang } = props ? props.lang : props.editorState.lang

  console.log('Preview props', props.font_type, props.editorState.font_type)

  const setCodeblock = (e) => {
    console.log('e.target.name', e.target.name)
    switch (e.target.name) {
      case 'jsx':
        setSelect(0)
        break
      case 'js':
        setSelect(1)
        break
      case 'python':
        setSelect(2)
        break
      case 'markdown':
        setSelect(3)
        break
      case 'html':
        setSelect(4)
        break
      case 'css':
        setSelect(5)
        break
      default:
        setSelect(0)
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
      <pre
        style={{
          '--text': `${text}`,
          '--bg': `${bg}`,
          '--comment': `${comment}`,
          '--punct': `${punct}`,
          '--tags': `${tags}`,
          '--attr_name': `${attr_name}`,
          '--func_name': `${func_name}`,
          '--bool': `${bool}`,
          '--number': `${number}`,
          '--func': `${func}`,
          '--property': `${property}`,
          '--class_name': `${class_name}`,
          '--constant': `${constant}`,
          '--selector': `${selector}`,
          '--keyword': `${keyword}`,
          '--str': `${str}`,
          '--charact': `${charact}`,
          '--attr_value': `${attr_value}`,
          '--regx': `${regx}`,
          '--variable': `${variable}`,
          '--operator': `${operator}`,
          '--entity': `${entity}`,
          '--url': `${url}`,
          '--font_type': `${
            props.font_type ? props.font_type : props.editorState.font_type
          }`
        }}
      >
        <code className="language-js">{codeSnippet[select]}</code>
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
