import React from 'react'
import ThemeDetail from '../components/ThemeDetail'
import Interactions from '../components/Interactions'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const ThemePage = (props) => {
  return (
    <div>
      <ThemeDetail {...props} />
      <Interactions />
      <ReviewForm />
    </div>
  )
}

export default ThemePage
