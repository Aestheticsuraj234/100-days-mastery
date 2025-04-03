import React from 'react'
import { useParams } from 'react-router-dom'
const UserProfile = () => {
    const {userId} = useParams()
  return (
    <div>
        Hello and welcome {userId}
    </div>
  )
}

export default UserProfile