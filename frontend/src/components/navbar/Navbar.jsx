import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-icon'>
        <Link to={"/"}>
          <img src='./logo2.png' alt='Logo'></img>
        </Link>
      </div>
      <div className='navbar-buttons'>
          <NavLink to={"/"}>
            Menú
          </NavLink>
          <NavLink to={"/services"}>
            Servicios
          </NavLink>
          <NavLink to={"/about"} style={{marginLeft: '-10px'}}>
            Sobre Nosotros
          </NavLink>
      </div>
      <div className='navbar-auth'>        
        <Link to={"/login"} className='auth-button login'>
          👤ㅤMi Cuenta
        </Link>
      </div>
    </div>
  )
}

export default Navbar