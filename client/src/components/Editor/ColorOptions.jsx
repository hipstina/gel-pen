import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    editorState: state.editorState
  }
}

const ColorOptions = (props) => {
  const renderColorOptions = () => {
    // CONVERT STYLES OBJ TO ARR
    let obj = props.editorState.css_styles
    let styleArr = []
    for (let selector in obj) {
      if (obj.hasOwnProperty(selector)) {
        styleArr.push([selector, obj[selector]])
      }
    }
    return styleArr.map((s, idx) => (
      <div key={idx}>
        {/* TODO: add more detailed labels */}
        <label>{s[0]} </label>
        <input
          type="color"
          name={s[0]}
          value={s[1]}
          onChange={(e) => props.handleChangeEditor(e)}
        />
      </div>
    ))
  }

  return <div>{renderColorOptions()}</div>
}

export default connect(mapStateToProps, null)(ColorOptions)
