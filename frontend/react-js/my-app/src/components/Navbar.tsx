import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-between" , position:"sticky" , top:"0px"}}>
        <ul style={
            {
                display:"flex" , 
                listStyle:"none" , 
                gap:"20px" , 
                alignItems:"center"
            }
        }>
            <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} 
            >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </ul>
    </div>
  )
}

export default Navbar