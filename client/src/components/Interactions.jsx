import React from 'react'
import ReviewCard from '../components/ReviewCard'
import '../styles/buttons.css'

const Interactions = (props) => {
  return (
    <div className="intxn__wrapper">
      {/* <ReviewCard /> */}
      <button
        onClick={(e) => props.onClick(e, props.theme_id, props.likes)}
        className="like__btn
        btn"
      >
        <span className="btn__label">{props.likes} likes</span>
      </button>

      {/* <p>{props.created}</p> */}
      <button
        onClick={(e) => props.targetTheme(e, props.theme_id)}
        className="more__btn
        btn"
      >
        <span className="btn__label">Details</span>
      </button>
      {/* 
  LIKE BUTTON
  LIKE COUNT
  REVIEWS
  REVIEW FORM
  EXPORT
   */}
    </div>
  )
}

export default Interactions
