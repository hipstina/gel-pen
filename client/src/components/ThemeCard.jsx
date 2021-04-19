import React from 'react'

import Interactions from '../components/Interactions'
import Preview from '../components/Preview'

import '../styles/Themes.css'

const ThemeCard = (props) => {
  return (
    <div>
      {props ? (
        <div className="theme__card">
          <h3>{props.theme_name}</h3>
          <Preview
            css_styles={props.css_styles}
            font_type={props.font_type}
            page={props.page}
          />
          <Interactions {...props} />
          {/* <button
            onClick={(e) => props.onClick(e, props.theme_id, props.likes)}
          >
            Like
          </button>
          <p>{props.likes}</p>
          <p>{props.created}</p> */}
        </div>
      ) : (
        'NULL Theme name'
      )}
    </div>
  )
}

export default ThemeCard
