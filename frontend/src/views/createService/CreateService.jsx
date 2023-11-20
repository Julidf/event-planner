import React, { useState } from "react";
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
  } from "mdb-react-ui-kit";

const CreateService = () => {
    const [nombreServicio, setNombreServicio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleNombreServicioChange = (e) => {
        setNombreServicio(e.target.value);
      };
    const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, backgroundColor: "#eee", padding: "20px" }}>
      <MDBContainer className="py-5">
        <div style={{ display: "flex", flexDirection: "column" }}>    
            <MDBCard className="mb-4">  
                <MDBCardBody>
                
                    <MDBCard className="mb-4">
                        <MDBCardBody className="text-center">
                            
                                <MDBCardImage
                                    src="./catering.png"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "300px", height: "300px", marginBottom: "20px" }}
                                    fluid
                                />
                            <div className="d-flex justify-content-center mb-2">
                                <MDBBtn>Agregar imagen</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Nombre del servicio</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <input
                                type="text"
                                className="form-control"
                                value={nombreServicio}
                                onChange={handleNombreServicioChange}
                                style={{ maxWidth: "400px" }}
                            />
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Descripción del servicio</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <input
                                type="text"
                                className="form-control"
                                value={descripcion}
                                onChange={handleDescripcionChange}
                                style={{ maxWidth: "400px" }}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <MDBBtn className="btn-primary"
            style={{ marginLeft: "auto", marginRight: "0" }}
            >Agregar servicio</MDBBtn>
            </div>
      </MDBContainer>
      </div>
      <Footer />
      </div>
  );
};

export default CreateService;
