import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./landing.css"
import Footer from '../../components/footer/Footer'
import { Divider } from '@mui/material'
import CategoryList from '../../components/category-list/CategoryList'
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem 
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRobot } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Realiza la solicitud GET al servidor para obtener las categorías
      fetch('http://localhost:3030/categories/all')
          .then((response) => response.json())
          .then((data) => {
              setData(data);
              setLoading(false);
          })
          .catch((error) => {
              console.error('Error al obtener las categorías:', error);
              setLoading(false);
          });
  }, []);

  {console.log(openModal)}

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
              <p>Hablá con nuesto <b>ChatBot</b> para obtener recomendaciones a tu medida! </p>
            </div>
            <div className='banner-picture'>
              <img src='./image-banner2.png' alt='Banner'/>
            </div>
          </div>
        </div>
        <Divider sx={{borderColor: "white", borderWidth:"1px", marginX: "15vw"}}/>

        {<CategoryList categoryList={data}/>}

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
        <MDBDropdown style={{content:"none"}}>
          <MDBDropdownToggle
            className="btn-primary"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              fontSize: "24px",
              padding: "40px",
              cursor: "pointer",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex:9,
            }}
          >
            <FontAwesomeIcon icon={faRobot} />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem>
              <iframe src="http://localhost:8080/index2.html" frameborder="0" style={{ borderRadius: '30px' }}  scrolling="no" height={"700px"} width={"600px"}></iframe>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <Footer/>
      </div>
    </div>
  )
}

export default Landing