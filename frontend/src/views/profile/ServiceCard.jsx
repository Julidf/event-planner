import React from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
  } from "mdb-react-ui-kit";
  

function ServiceCard({serviceData}) {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");

  return (
    <MDBCol md="6">
        <MDBCard className="mb-4 mb-md-0" >
            <MDBCardBody>
            <MDBCardText className="mb-1">
                <span className="text-primary font-italic me-1">
                    {serviceData.name}
                </span>
            </MDBCardText>
            <hr />
            <MDBRow>
                <MDBCol sm="3">
                <MDBCardText style={{ fontSize: ".80rem" }}>Proveedor</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                    {name} {surname} (Yo)
                </MDBCardText>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm="3">
                <MDBCardText style={{ fontSize: ".80rem" }}>Descripción</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                    {serviceData.offer[0].description}
                </MDBCardText>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm="3">
                <MDBCardText style={{ fontSize: ".80rem" }}>Precio</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                    $ {serviceData.offer[0].price}
                </MDBCardText>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm="3">
                <MDBCardText style={{ fontSize: ".80rem" }}>Ubicación</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                <MDBCardText className="text-muted" style={{ fontSize: ".80rem" }}>
                    {serviceData.city}, {serviceData.country}
                </MDBCardText>
                </MDBCol>
            </MDBRow>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
  )
}

export default ServiceCard