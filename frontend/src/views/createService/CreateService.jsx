import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
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
  const [servicio, setServicio] = useState({
    name: "",
    description: "",
    owner: "",
    category: "",
    price: 0,
    offer: [
      {
        description: "",
        price: "",
      },
    ],
    country: "Argentina",
    city: "Buenos Aires",
    rank: 1,
    picture: "",
  });

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3030/categories/all")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error al obtener categorias");
        }
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error al obtener categorias");
      });
  }, []);

  const handleChangeServicio = (evt) => {
    setServicio({
      ...servicio,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleImage = (evt) => {
    let cat = categories.find((category) => category.id === evt.target.value);
    setServicio({
      ...servicio,
      [evt.target.name]: evt.target.value,
      picture: `${cat.picture}`,
    });
  };

  const CreateService = () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const expiration_token = localStorage.getItem("expiration_token");
    const user_email = localStorage.getItem("user_email");
    const user_id = localStorage.getItem("user_id");
    servicio.offer[0].description = servicio.description;
    servicio.offer[0].price = servicio.price;
    servicio.owner = user_id;
    delete servicio.price;

    if (
      access_token &&
      refresh_token &&
      expiration_token &&
      user_email &&
      user_id
    ) {
      //create service
      fetch("http://localhost:3030/services/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(servicio),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Error al crear servicio");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
          alert("Error al crear servicio");
        });
    }
    navigate("/profile");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1, backgroundColor: "#eee", padding: "20px" }}>
        <form onSubmit={CreateService}>
          <MDBContainer className="py-5">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={servicio.picture || "./catering.png"}
                        alt="avatar"
                        className="rounded-circle"
                        style={{
                          width: "300px",
                          height: "300px",
                          marginBottom: "20px",
                        }}
                        fluid
                      />
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
                        name="name"
                        value={servicio.name}
                        onChange={handleChangeServicio}
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
                        name="description"
                        value={servicio.description}
                        onChange={handleChangeServicio}
                        style={{ maxWidth: "400px" }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Precio del servicio</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={servicio.price}
                        onChange={handleChangeServicio}
                        style={{ maxWidth: "400px" }}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Categoria del servicio</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <select
                        className="form-select"
                        name="category"
                        value={servicio.category}
                        onChange={handleImage}
                        style={{ maxWidth: "400px" }}
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBBtn
                className="btn-primary"
                style={{ marginLeft: "auto", marginRight: "0" }}
              >
                Agregar servicio
              </MDBBtn>
            </div>
          </MDBContainer>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateService;
