import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-icon'>
        <Link to={"/"}>
          <img src='images/logo2.png' alt='Logo'></img>
        </Link>
      </div>
      <div className='navbar-buttons'>
          <NavLink to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/services"}>
            Services
          </NavLink>
          <NavLink to={"/about"}>
            About
          </NavLink>
      </div>
      <div className='navbar-auth'>
        <Link to={"/login"} className='auth-button login'>
          Iniciar sesión
        </Link>
        <Link to={"/register"} className='auth-button register'>
          Registrarse
        </Link>
      </div>
    </div>
  )
}

export default Navbar