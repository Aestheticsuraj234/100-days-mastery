import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main className='flex-grow pt-16'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout