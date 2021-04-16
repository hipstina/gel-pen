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

  const codeSnippetJSX = `        
        const App = () => {
          return (
            <h1>the codes</h1>
          );
        }

        ReactDOM.render(<App />, document.getElementById("root"));
     `
  const codeSnippetJS = `Token.stringify = function stringify(o, language) {
	if (typeof o == 'string') {
		return o;
	}
	if (Array.isArray(o)) {
		var s = '';
		o.forEach(function (e) {
			s += stringify(e, language);
		});
		return s;
	}
  
	_.hooks.run('wrap', env);

	var attributes = '';
	for (var name in env.attributes) {
		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

/**
 * @param {RegExp} pattern
 * @param {number} pos
 * @param {string} text
 * @param {boolean} lookbehind
 * @returns {RegExpExecArray | null}
 */
function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	var match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		// change the match to remove the text matched by the Prism lookbehind group
		var lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}
`
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
        <code className="language-js">{codeSnippetJSX}</code>
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
