import React from 'react'
import { connect } from 'react-redux'
import { COLOR_TOKENS } from '../../constants/colors'

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
    // ADD LABELS TO COLOR OPTIONS
    return COLOR_TOKENS.map((color, i) => (
      <div key={i} className="color__option__wrapper">
        <input
          type="color"
          name={color[0]}
          value={styleArr[i][1]} // COLOR VALUE === EDITOR STATE
          onChange={(e) => props.handleChange(e)}
        />
        <label>
          {color[1].map((token, t) => (
            <p key={t} className="color__option__label">
              {token}
            </p>
          ))}
        </label>
      </div>
    ))
  }

  return <div>{renderColorOptions()}</div>
}

export default connect(mapStateToProps, null)(ColorOptions)
