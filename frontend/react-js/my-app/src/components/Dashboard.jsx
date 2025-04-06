import React, { useContext } from 'react'
import User from './User'
import { GlobalContext } from '../context/GlobalContext'

const Dashboard = () => {
  const {age} = useContext(GlobalContext)
  return (
    <div>
        <User/>
        <p>
            this is dashboard age {age}
        </p>
    </div>
  )
}

export default Dashboard