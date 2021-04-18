export const JS = `Token.stringify = function stringify(o, language) {
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

`

export const JSX = `const App = () => {
  return (
    <h1>the codes</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
`

export const PYTHON = `class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname()`

export const MARKDOWN = `# Markdown

## Something README.md
Here is a [link](link.com)

\`git command\`

Tech stacks
`

export const HTML = `<html>
<head>
<style type="text/css">
code { background-color: gray; color: blue; }
</style>
</head>
<body>
  <p>Some code:</p>
  <code>My code...</code>
</body>
</html>`

export const CSS = `.preview__wrapper {
  position: absolute;
  right: 0;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 0.1rem;
  width: 50%;
  height: 100%;
  margin: 0;
}`

export const STYLESHEET = `code[class*='language-'],
pre[class*='language-'] {
  color: var(--text);
  background: none;
  font-family: var(--font_type);
  font-size: 1em; 
  font-weight: 500;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*='language-'] {
  padding: 5em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: var(--bg);
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--comment);
}

.token.punctuation {
  color: var(--punct);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: var(--tags);
}

.token.function-name {
  color: var(--func_name);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--bool);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--property);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--selector);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: var(--str);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--operator);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}

`
