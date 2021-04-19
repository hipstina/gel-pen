import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'
import '../styles/Preview.css'
import { connect } from 'react-redux'
import { AddCSS, CSS_Submitted } from '../store/actions/EditorActions.js'
import {
  JS,
  JSX,
  PYTHON,
  MARKDOWN,
  HTML,
  CSS,
  STYLESHEET
} from '../constants/codeblocks'
import PreviewBtns from '../components/PreviewBtns'
import '../styles/PrevContainer.css'

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
  const [select, setSelect] = useState(0)

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [select, props.editorState])

  // CONDITIONALLY DESCTRUCTURE STYLE OBJ PROPS
  // DEFAULT TO CURRENT STATES STYLE OBJ
  const {
    text,
    bg,
    comment,
    punct,
    tags,
    func_name,
    bool,
    property,
    selector,
    str,
    operator
  } = props.css_styles ? props.css_styles : props.editorState.css_styles

  const style_obj = {
    '--text': `${text}`,
    '--bg': `${bg}`,
    '--comment': `${comment}`,
    '--punct': `${punct}`,
    '--tags': `${tags}`,
    '--func_name': `${func_name}`,
    '--bool': `${bool}`,
    '--property': `${property}`,
    '--selector': `${selector}`,
    '--str': `${str}`,
    '--operator': `${operator}`,
    '--font_type': `${
      props.font_type ? props.font_type : props.editorState.font_type
    }`
  }
  console.log(
    'FONT',
    props.font_type ? props.font_type : props.editorState.font_type,
    props.font_type,
    props.editorState.font_type
  )
  let codeSnippet = [JS, JSX, PYTHON, MARKDOWN, HTML, CSS]

  const stringifyStyle = () => {
    // CONVERT STYLES OBJ TO STRING
    let obj = props.editorState.css_styles
    let styleStr = `:root { \n`
    for (let selector in obj) {
      if (obj.hasOwnProperty(selector)) {
        styleStr += '--' + selector + ':' + obj[selector] + ' \n'
      }
    }

    let fontType = props.font_type
      ? props.font_type
      : props.editorState.font_type

    return (
      styleStr +
      `--font_type: ` +
      `'` +
      fontType +
      `'` +
      `\n} \n\n` +
      STYLESHEET
    )
  }

  return (
    <div>
      <PreviewBtns select={select} setSelect={setSelect} />
      <pre
        className={
          props.page === 'browse'
            ? 'preview__wrapper__browse'
            : props.page === 'editor'
            ? 'preview__wrapper__editor'
            : props.page === 'profile'
            ? 'preview__wrapper__profile'
            : 'preview__wrapper__detail'
        }
        style={style_obj}
      >
        <code className="language-js ">
          {select !== 5 ? codeSnippet[select] : stringifyStyle()}
        </code>
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
