import React from 'react'

const ThemeCard = (props) => {
  return (
    <div>
      ThemeCard
      {props ? (
        <div>
          <h3>{props.themeName}</h3>
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
