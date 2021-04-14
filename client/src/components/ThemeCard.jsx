import React from 'react'

const ThemeCard = (props) => {
  return (
    <div>
      ThemeCard
      {props ? (
        <div>
          <h3>{props.themeName}</h3>
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
