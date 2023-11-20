import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

export default function ProfilePage() {
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
                    <p className="text-muted mb-1 mt-3">Christian Viarnes</p>
                    <p className="text-muted mb-4">Buenos Aires, Argentina</p>
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn>Modificar Cuenta</MDBBtn>
                      <MDBBtn outline className="ms-1">
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
                      Christian
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
                      Viarnes
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
                      christiancdv@gmail.com
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
                    <MDBCardText className="text-muted">✅</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow className="g-2">
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Servicio
                      </span>{" "}
                      Brindado por mi
                    </MDBCardText>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Proveedor</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Yo
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Comprador</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Lautaro Greco
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Precio</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          $4533
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Estado</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Pagado y finalizado el dia 12/12/2020
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Servicio
                      </span>{" "}
                      Brindado por mi
                    </MDBCardText>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Proveedor</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Yo
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Comprador</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Lucas Alvarez
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Precio</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          $4533
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Estado</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Pagado y finalizado el dia 12/12/2020
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Servicio
                      </span>{" "}
                      Brindado por otro
                    </MDBCardText>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Proveedor</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Juan Lopez
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Comprador</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Yo
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Precio</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          $4533
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Estado</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Pagado y finalizado el dia 12/12/2020
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        Servicio
                      </span>{" "}
                      Brindado por otro
                    </MDBCardText>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Proveedor</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Juan Lopez
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Comprador</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Yo
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Precio</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          $4533
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText style={{ fontSize: ".80rem" }}>Estado</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                          Pagado y finalizado el dia 12/12/2020
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <div>
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
                      to="/editService"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                        padding: "10px 20px", 
                        display: "block",     
                      }}
                    >
                      Editar Servicio
                    </Link>
                  </MDBDropdownItem>
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
            </div>
          </MDBCol>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}
