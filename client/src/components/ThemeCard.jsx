import React from 'react'

import Interactions from '../components/Interactions'
import Preview from '../components/Preview'

import '../styles/Themes.css'

const ThemeCard = (props) => {
  return (
    <div>
      {props ? (
        <div className="theme__card">
          <h3>{props.theme_name ? props.theme_name : 'Untitled'}</h3>
          <Preview
            css_styles={props.css_styles}
            font_type={props.font_type}
            page={props.page}
          />
          <Interactions {...props} />
        </div>
      ) : (
        'NULL Theme name'
      )}
    </div>
  )
}

export default ThemeCard
