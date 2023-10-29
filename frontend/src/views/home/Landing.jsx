import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./landing.css"
import Footer from '../../components/footer/Footer'
import { Divider } from '@mui/material'
import ServiceList from '../../components/service-list/ServiceList'

const serviceData =  [
  {name: "Música", description: "asd", image: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg"},
  {name: "Salón de fiestas", description: "asd", image: "https://www.dzoom.org.es/wp-content/uploads/2010/09/paisaje-profundidad-lineas-734x489.jpg"},
  {name: "Fotógrafo", description: "asd", image: "https://www.lowi.es/blog/wp-content/uploads/2018/05/Blog_32.jpeg"},
  {name: "Catering", description: "asd", image: "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"},
  {name: "Estética", description: "asd", image: "https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"},
  {name: "Bartender", description: "asd", image: "https://img.freepik.com/fotos-premium/fantastica-vista-cascada-kirkjufellsfoss-cerca-montana-kirkjufell-al-atardecer_761071-868.jpg"}
]

const Landing = () => {

  const [servicesList, setServicesList] = useState(serviceData);

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
        <Divider sx={{borderColor: "white", borderWidth:"1px", marginX: "15vw"}}/>

        <ServiceList servicesList={servicesList}/>

        <Divider sx={{borderColor: "white", borderWidth:"1px", marginX: "15vw"}}/>
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