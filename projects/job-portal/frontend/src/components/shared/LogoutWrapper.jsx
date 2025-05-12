import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../ui/button'

const LogoutWrapper = ({children}) => {
    const {logout} = useAuth()

    const onLogout = async ()=>{
        await logout()
    }

  return (
    <Button variant="ghost" onClick={onLogout} className={"w-full"}>
      {children}

    </Button>
  )
}

export default LogoutWrapper