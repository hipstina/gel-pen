import React from 'react'
import { FONTS } from '../../constants/fonts.jsx'
import '../../styles/Select.css'

const FontOptions = (props) => {
  const renderFonts = () =>
    FONTS.map((font, i) => (
      <option
        key={i}
        name="font_type"
        value={font}
        onClick={(e) => props.setFont(e)}
      >
        {font}
      </option>
    ))
  return (
    <div className="font__option">
      <label className="font__option__label">Font</label>
      <select className="select-css">{renderFonts()}</select>
    </div>
  )
}

export default FontOptions
