import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Link to="/">
      <nav className="nav-bar">
        <p>Michelle and Tony's TV Site</p>
      </nav>
    </Link>
  )
}

export default NavBar
