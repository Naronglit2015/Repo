import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location)
  return (
    <header>
      <h1>Header</h1>
      <p>current path : {location.pathname}</p>
      <button onClick={()=>{navigate('/')}}>Home</button>
    </header>
  )
}

export default Header