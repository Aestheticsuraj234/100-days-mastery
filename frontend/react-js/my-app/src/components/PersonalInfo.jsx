import React from 'react'
import Profile from './Profile'

const PersonalInfo = ({username}) => {
  return (
    <div>
        <Profile username={username}/>
        <h1>Personal Information</h1>
    </div>
  )
}

export default PersonalInfo