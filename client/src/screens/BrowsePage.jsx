import React from 'react'
import Themes from '../components/Themes'

const BrowsePage = (props) => {
  return (
    <div>
      <Themes {...props} page="browse" />
    </div>
  )
}

export default BrowsePage
