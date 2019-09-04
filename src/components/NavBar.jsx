import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </nav>
  )
}

export default NavBar
