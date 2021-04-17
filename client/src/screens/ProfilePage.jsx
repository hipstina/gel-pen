import React from 'react'
import Profile from '../components/Profile'
import Themes from '../components/Themes'

const ProfilePage = (props) => {
  return (
    <div>
      <Profile {...props} />
      <Themes {...props} page="profile" />
    </div>
  )
}

export default ProfilePage
