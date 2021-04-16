import React from 'react'
import ThemeDetail from '../components/ThemeDetail'
import Interactions from '../components/Interactions'
import ReviewForm from '../components/ReviewForm'

const ThemePage = (props) => {
  return (
    <div>
      <ThemeDetail {...props} />
      <Interactions />
      <ReviewForm {...props} />
    </div>
  )
}

export default ThemePage
