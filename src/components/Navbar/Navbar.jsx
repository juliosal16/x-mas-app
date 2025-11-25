import React from 'react'
import Logo from '../../img/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="myNav navbar ">
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          X-mas List 2025
        </a>
      </div>
    </nav>
  )
}

export default Navbar