import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
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

const EditServices = () => {

  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, backgroundColor: "#eee", padding: "20px" }}>
      <MDBContainer className="py-5">
        <div style={{ display: "flex", flexDirection: "column" }}>  
          <MDBCol lg="8" style={{ margin: "auto" }}>
      
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

          </MDBCol>
          </div>
        </MDBContainer>
        </div>
      <Footer />
    </div>
  );
};

export default EditServices;
