import React from 'react'
import { FONTS } from '../../constants/fonts.jsx'

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
    <div>
      <label>Font</label>
      <select>{renderFonts()}</select>
    </div>
  )
}

export default FontOptions
