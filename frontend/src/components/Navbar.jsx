import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <NavLink to={"/"}>
          HOME
        </NavLink>
        <NavLink to={"/services"}>
          SERVICES
        </NavLink>
        <NavLink to={"/about"}>
          ABOUT
        </NavLink>
    </div>
  )
}

export default Navbar