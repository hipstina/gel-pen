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
		attributes += ' ' + name + '="' + (env.attributes[name] || '')
    .replace(/"/g, '&quot;') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' 
  + attributes + '>' + env.content + '</' + env.tag + '>';
};

`

export const JSX = `import React, { useEffect, useState } from 'react'
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


  }

  let codeSnippet = [JS, JSX, PYTHON, MARKDOWN, HTML, CSS]

  return (
    <div>
      {props.page === 'browse' ? null : props.page === 'editor' ? (
        <PreviewBtns select={select} setSelect={setSelect} page={props.page} />
      ) : props.page === 'profile' ? null : (
        <PreviewBtns select={select} setSelect={setSelect} page={props.page} />
      )}

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
`

export const PYTHON = `from models.db import db
from sqlalchemy.orm import joinedload
from datetime import datetime  # optional
import json
from sqlalchemy.dialects.postgresql.json import JSONB


class Theme(db.Model):
    __tablename__ = 'themes'
    id = db.Column(db.Integer, primary_key=True)
    css_styles = db.Column(JSONB)
    theme_name = db.Column(db.String(80))
    font_type = db.Column(db.String(80), nullable=True)
    lang = db.Column(db.String(80), nullable=True)
    likes = db.Column(db.Integer)
    theme_description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), nullable=False)
    user = db.relationship("User", backref=db.backref(
        'user', lazy=True))
    reviews = db.relationship("Review", cascade='all', backref=db.backref(
        'reviews', lazy=True))

    def __init__(self, css_styles, theme_name, font_type, lang, likes, theme_description, user_id):
        self.css_styles = css_styles
        self.theme_name = theme_name
        self.font_type = font_type
        self.lang = lang
        self.likes = likes
        self.theme_description = theme_description
        self.user_id = user_id

    def json(self):
        return {
            "id": self.id,
            "css_styles": self.css_styles,
            "theme_name": self.theme_name,
            "font_type": self.font_type,
            "lang": self.lang,
            "likes": self.likes,
            "theme_description": self.theme_description,
            "created_at": str(self.created_at),
            "updated_at": str(self.updated_at),
            "user_id": self.user_id
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return Theme.query.all()

    @classmethod  # find all themes by user_id
    def find_by_user(cls, user_id):
        return Theme.query.all()

    @classmethod
    def find_by_id(cls, id):
        return Theme.query.filter_by(id=id).first()

    @classmethod
    def include_reviews(cls, theme_id):
        theme = Theme.query.options(joinedload(
            'reviews')).filter_by(id=theme_id).first()
        reviews = [r.json() for r in theme.reviews]
        return {**theme.json(), "reviews": reviews}`

export const MARKDOWN = `# Gel Pen 
![gel pen banner](./assets/gel-pen-banner.png)
## Project status: In development
### By: Christina Padilla

### [Portfolio](https://christinapadilla.com) | [GitHub](https://github.com/hipstina) 
| [LinkedIn](https://linkedin.com/in/hipstina)
***

### **Description** 
Gel Pen is an app for building beautiful syntax highlighting themes. With the Gel Pen editor, 
you can mock up your own syntax highlighting theme from scratch and begin using your theme 
immediately for all of your code snippets. Browse our library of themes to see what other 
users have made, like your favorites, and leave reviews of ones you've used.  

### **Technologies Used**
* React.js
* Flask-SQLAlchemy
* Redux


### **Getting Started**
To get started, clone this repo to your local machine.
\`\`\`shell
$ git clone https://github.com/hipstina/gel-pen.git
\`\`\`

This project is built with [Prism.js](https://prismjs.com/). You will need to install 
Prism.js power your syntax highlighting themes.
\`\`\`shell
$ npm i prismjs
\`\`\`


Install the dependencies for the server
\`\`\`shell
$ cd gel-pen
$ npm i 
\`\`\`

Install the dependencies for client
\`\`\`shell
$ cd client
$ npm i
\`\`\`

### **Screenshots**
![gel-pen entity relationship diagram](./assets/gel-pen-erd.png)

![gel-pen component hierarchy diagram](./assets/gel-pen-chd.png)

![gel-pen wireframe](./assets/gel-pen-wireframes.png)

![gel-pen final](./assets/gel-pen-screenshot.png)


### **Future Updates**
Track the development of this project on Trello: https://trello.com/b/LyINHY6A/gel-pen


### **Credits**

[Prism.js](https://prismjs.com/)

[Night Owl](https://github.com/sdras/night-owl-vscode-theme) - a VS code theme by Sarah Drasner 

[CSS Variables for React Devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/) by Josh Comeau

Diagrams & wireframe built with [Lucid](https://lucid.app/)

`

export const HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔆</text></svg>">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \`public\` folder during the build.
      Only files inside the \`\\public\` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running \`npm run build\`.
    -->
    <title>GEL PEN</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run \`npm start\` or \`yarn start\`.
      To create a production bundle, use \`npm run build\` or \`yarn build\`.
    -->
  </body>
</html>`

export const CSS = `.preview__wrapper {
  position: absolute;
  right: 0;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
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
