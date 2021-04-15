import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../styles/Preview.css'
import { connect } from 'react-redux'
import { AddCSS, CSS_Submitted } from '../store/actions/EditorActions.js'

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
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

  const codeSnippet = `        
        const App = () => {
          return (
            <h1>the codes</h1>
          );
        }

        ReactDOM.render(<App />, document.getElementById("root"));
     `
  // CONDITIONALLY DESCTRUCTURE PROPS
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

  return (
    <div>
      Preview
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
          '--url': `${url}`
        }}
      >
        <code className="language-js">{codeSnippet}</code>
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
