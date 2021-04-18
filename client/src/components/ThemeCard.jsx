import React from 'react'
import Preview from '../components/Preview'

const ThemeCard = (props) => {
  return (
    <div>
      ThemeCard
      {props ? (
        <div>
          <h3>THEME: {props.theme_name}</h3>
          <Preview css_styles={props.css_styles} font_type={props.font_type} />
          <button
            onClick={(e) => props.onClick(e, props.theme_id, props.likes)}
          >
            Like
          </button>
          <p>{props.likes}</p>
          <p>{props.created}</p>
        </div>
      ) : (
        'NULL Theme name'
      )}
    </div>
  )
}

export default ThemeCard
