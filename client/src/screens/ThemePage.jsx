import React from 'react'
import ThemeDetail from '../components/ThemeDetail'
import Interactions from '../components/Interactions'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

const ThemePage = () => {
  return (
    <div>
      <ThemeDetail />
      <Interactions />
      <ReviewForm />
    </div>
  )
}

export default ThemePage
