import React from 'react'
import Navbar from '../../components/Navbar'
import "./landing.css"

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className='landing-container'>
        <div className='banner'>
          <div className='banner-inner'>
            <div className='banner-text'>
              <h3>
                La solución definitiva para la planificación de eventos memorables.
              </h3>
              <h2>
                A tu alcance.
              </h2>
              <p>¡Crea Eventos Memorables con Facilidad! </p>
              <p>Descubre, Planifica y Disfruta con Nosotros.</p>
            </div>
            <div className='banner-picture'>
              <img src='image-banner2.png' alt='Banner'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing