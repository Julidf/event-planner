import React from 'react'
import Navbar from '../../components/Navbar'
import "./Landing.css"

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className='landing-container'>
        <div className='banner'>
          <div className='banner-inner'>
            <h3>
              Tu solución definitiva para la planificación de eventos memorables.
            </h3>
            <p>
              Encontrá tu solución ideal entre los prestadores registrados!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing