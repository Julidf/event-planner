import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import ServiceCard from './ServiceCard'
import "./landing.css"
import Footer from '../../components/footer/Footer'

const Landing = () => {

  const [servicesList, setServicesList] = useState();

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    const services = [
      {name: "Música", description: "Aguante la música loco rock and roll, reggae, etc"},
      {name: "Salón de fiestas", description: "Salones de fiesta para organizar la party!"},
      {name: "Fotógrafo", description: "Para las fotos de Ig necesitás un fotógrafo"},
      {name: "Catering", description: "Como dice el refrán panza llena, coso"},
      {name: "Estética", description: "No me queda muy claro que es estética, pero hay estética"},
      {name: "Bartender", description: "Barra libre etc" }
    ]
    setServicesList(services)
  };

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
              <img src='./image-banner2.png' alt='Banner'/>
            </div>
          </div>
        </div>
        <div className='services-list-container'>
          <div className='services-list-inner'>
            <div className='services-title'>
              <h1>¿Qué servicios buscás?</h1>
            </div>
            <div className='services-list-cards'>
              {servicesList
              ? servicesList.map((service, idx) => <ServiceCard key={idx} {...service} />)
              : <h1>Loading services...</h1>}
            </div>
          </div>
        </div>
        <div className='explanation-container'>
          <div className='explanation-inner'>
            <div className='explanation-header'>
              <h1>¿CÓMO FUNCIONA EVENT PLANNER?</h1>
              <span>Es muy sencillo</span>
              <p>Tan solo sigue estos tres pasos y en pocas horas recibirás propuestas de profesionales recomendados por otros usuarios.</p>
            </div>
            <div className='explanation-sections'>
              <div className='section'>
                <img src='./hs_paso1.png' alt='one'></img>
                <h2>Dinos que necesitas</h2>
                <span>Cuéntanos sobre tu necesidad y nosotros lo pondremos a disposición de profesionales recomendados que te ayudarán a hacerlo realidad.</span>
              </div>
              <div className='section'>
                <img src='./hs_paso2.png' alt='two'></img>
                <h2>Recibe multiples propuestas</h2>
                <span>En pocas horas recibirás las propuestas solicitadas. Conversa y evacúa dudas a través de nuestro chat. Compara reputación, experiencia y presupuestos.</span>
              </div>
              <div className='section'>
                <img src='./hs_paso3.png' alt='three'></img>
                <h2>Elige</h2>
                <span>Cuando tengas toda la información, contrata de manera directa y abona sin intermediarios ni sobrecostos.</span>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Landing