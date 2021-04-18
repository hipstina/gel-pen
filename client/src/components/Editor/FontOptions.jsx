import React from 'react'

const FontOptions = (props) => {
  console.log('font_type props', props)
  return (
    <div>
      <label>Font</label>
      <select>
        <option
          name="font_type"
          value="IBM Plex Mono"
          onClick={(e) => props.setFont(e)}
        >
          IBM Plex Mono
        </option>
        <option
          name="font_type"
          value="PT Mono"
          onClick={(e) => props.setFont(e)}
        >
          PT Mono
        </option>
        <option
          name="font_type"
          value="Fira Mono"
          onClick={(e) => props.setFont(e)}
        >
          Fira Mono
        </option>
        <option
          name="font_type"
          value="Overpass Mono"
          onClick={(e) => props.setFont(e)}
        >
          Overpass Mono
        </option>
        <option
          name="font_type"
          value="Roboto Mono"
          onClick={(e) => props.setFont(e)}
        >
          Roboto Mono
        </option>
        <option
          name="font_type"
          value="Metrophobic"
          onClick={(e) => props.setFont(e)}
        >
          Metrophobic
        </option>
        <option name="font_type" value="Jura" onClick={(e) => props.setFont(e)}>
          Jura
        </option>
      </select>
    </div>
  )
}

export default FontOptions
