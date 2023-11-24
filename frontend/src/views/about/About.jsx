import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Divider } from '@mui/material';
import Footer from '../../components/footer/Footer';
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='about-container'>
        <div className='about-inner'>
          <div className='about-text'>
            <h4>¿Quiénes somos?</h4>
            <Divider sx={{ borderColor: "white", borderWidth: "1px", marginBottom: "1rem" }} />
            <p>
              Somos un equipo comprometido con el desarrollo de una plataforma de alto impacto y 
              transformación social para el sector de la planificación de eventos.
            </p>

            <ul>
              <li>
                <strong>Objetivos</strong> <br/>
                <p>
                  Dinamizar un sector socio-económico relegado a través de fomentar la interacción entre colegas, promover la responsabilidad individual 
                  y el desarrollo profesional, favorecer la independencia laboral, la transparencia y el trato directo, como antagonistas de la intermediación,
                  y la generación de empleo e ingresos más estables.
                </p>
              </li>
              <li>
                  <strong>Misión</strong> <br/>
                  <p>
                    Ser una herramienta de transformación y crecimiento para todos los profesionales de servicios para la planificación de eventos, promoviendo la
                    igualdad de oportunidades, la responsabilidad y el desarrollo del potencial individual.
                  </p>
              </li>
              <li>
              <strong>Visión</strong> <br/>
                <p>
                  Ser la plataforma de referencia del mercado de los servicios para la planificación de eventos.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
