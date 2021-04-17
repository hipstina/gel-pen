import React from 'react'
import Themes from '../components/Themes'

const BrowsePage = (props) => {
  return (
    <div>
      Browse Page
      <Themes {...props} page="browse" />
    </div>
  )
}

export default BrowsePage
