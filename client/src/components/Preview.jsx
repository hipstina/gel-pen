import React from 'react'

const Preview = () => {
  const codeSnippet = `        
        const App = () => {
          return (
            <h1>the codes</h1>
          );
        }
        
        ReactDOM.render(<App />, document.getElementById("root"));
     `
  return (
    <div>
      Preview
      <pre>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  )
}

export default Preview
