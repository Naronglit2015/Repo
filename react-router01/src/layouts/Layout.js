import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout