import React from 'react'
import PersonalInfo from './PersonalInfo'

const User = ({username}) => {
  return (
    <div>
        {/*My dashboard*/}
        <PersonalInfo username={username}/>
    </div>
  )
}

export default User