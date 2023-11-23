import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem 
} from "mdb-react-ui-kit";
import ServiceCard from "./ServiceCard";

export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [services, setServices] = useState();
  const navigate = useNavigate()
  const userId = localStorage.getItem("user_id");
  const access_token = localStorage.getItem("access_token");
  
  useEffect(() => {
    fetchUserData();
    fetchServiceData();
  }, [userId, access_token]);

  async function fetchUserData() {
    try {
      const response = await axios.get(`http://localhost:3030/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setUserData(response.data)
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchServiceData() {
    try {
      const response = await axios.get(`http://localhost:3030/services/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setServices(response.data)
    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = async () => {
    const body = {
      "refreshToken": localStorage.getItem("refresh_token")
    }
    await axios.post(`http://localhost:3030/users/logout`, body).then((response) => {
        console.log(response)
    }).catch((error) => {
      console.error(error.message);
    }).finally(() => {
      navigate("/login")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("access_token")
      localStorage.removeItem("expiration_token")
      localStorage.removeItem("user_id")
      localStorage.removeItem("user_email")
    })
  }

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <Navbar />
        <MDBContainer className="py-5">
          <MDBCol lg="8" style={{ margin: "auto" }}>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1 mt-3">{userData.name} {userData.surname}</p>
                    <p className="text-muted mb-4">Buenos Aires, Argentina</p>
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn outline color="danger" onClick={logout}> Desloguearse</MDBBtn>
                      <MDBBtn className="ms-1">Modificar Cuenta</MDBBtn>
                      <MDBBtn outline color="warning" className="ms-1">
                        Borrar Cuenta
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nombre</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Apellido</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.surname}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Contraseña</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">*********</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Proveedor</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{userData.role==="user" ? "❌" : "✅"}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow className="g-2">
              {services && services.map((service) => (
                <ServiceCard key={service.id} serviceData={service}/>
              ))}
            </MDBRow>

            {userData.role==="provider" && <div>
              <MDBDropdown dropup>
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
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link 
                      to="/createService" 
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        padding: "10px 20px",  
                        display: "block",      
                      }}
                    >
                      Agregar Servicio
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>}
          </MDBCol>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}
