import React from 'react'
import { useAuth } from '../../context/AuthContext'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutWrapper from './LogoutWrapper'
import { Link } from 'react-router-dom'

const UserButton = () => {
    const {user:authUser} = useAuth()
    console.log(authUser)
    const role = authUser?.role[0]
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>
        {authUser.name[0]}
      </AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{authUser?.email}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
        role === "candidate" ? (
            <DropdownMenuItem>My Profile</DropdownMenuItem>
        ) : (
            <>
           <Link to={"/my-company"}>  <DropdownMenuItem>My Company</DropdownMenuItem></Link>
           <Link to={"/add-company"}> <DropdownMenuItem>Add Company</DropdownMenuItem></Link> 
            </>
           
        )
    }
    <DropdownMenuSeparator />
   <LogoutWrapper><DropdownMenuItem>Log out</DropdownMenuItem></LogoutWrapper> 
   
   
    

  </DropdownMenuContent>
</DropdownMenu>

    
  )
}

export default UserButton