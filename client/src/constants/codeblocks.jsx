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

export const JSX = `        
        const App = () => {
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

export const MARKDOWN = `## Markdown`

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

export const CSS = `pre {
  border-radius: 0.8rem;
  max-width: 500px;
  margin: 0 auto;
}

code {
  font-size: 14px;
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}`
