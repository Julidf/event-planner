import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-inner'>
            <div className='footer-logo'>
                <img src='./logo2.png' alt="Logo"/>
                <p>Event Planner</p>
            </div>
            <div className='footer-text'>
                <span> Tu solución de eventos!</span>
            </div>
        </div>
    </div>
  )
}

export default Footer