import React from 'react'

const ReviewCard = (props) => {
  return (
    <div>
      {props.review_content ? (
        <div>
          <h4>{props.review_title}</h4>
          <p>{props.review_content} </p>
        </div>
      ) : (
        'no content'
      )}
    </div>
  )
}

export default ReviewCard
