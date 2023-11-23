import React from 'react'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
  } from "mdb-react-ui-kit";
  

function ServiceCard() {
  return (
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
  )
}

export default ServiceCard