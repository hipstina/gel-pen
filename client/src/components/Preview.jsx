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
    // attr_name,
    func_name,
    bool,
    // number,
    // func,
    property,
    // class_name,
    // constant,
    selector,
    // keyword,
    str,
    // charact,
    // attr_value,
    // regx,
    // variable,
    operator
    // entity,
    // url
  } = props.css_styles ? props.css_styles : props.editorState.css_styles

  const style_obj = {
    '--text': `${text}`,
    '--bg': `${bg}`,
    '--comment': `${comment}`,
    '--punct': `${punct}`,
    '--tags': `${tags}`,
    // '--attr_name': `${attr_name}`,
    '--func_name': `${func_name}`,
    '--bool': `${bool}`,
    // '--number': `${number}`,
    // '--func': `${func}`,
    '--property': `${property}`,
    // '--class_name': `${class_name}`,
    // '--constant': `${constant}`,
    '--selector': `${selector}`,
    // '--keyword': `${keyword}`,
    '--str': `${str}`,
    // '--charact': `${charact}`,
    // '--attr_value': `${attr_value}`,
    // '--regx': `${regx}`,
    // '--variable': `${variable}`,
    '--operator': `${operator}`,
    // '--entity': `${entity}`,
    // '--url': `${url}`,
    '--font_type': `${
      props.font_type ? props.font_type : props.editorState.font_type
    }`
  }
  let codeSnippet = [JSX, JS, PYTHON, MARKDOWN, HTML, CSS]

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
      <pre className="preview__wrapper" style={style_obj}>
        <code className="language-js ">
          {select !== 5 ? codeSnippet[select] : stringifyStyle()}
          {/* {stringifyStyle()} */}
        </code>
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
