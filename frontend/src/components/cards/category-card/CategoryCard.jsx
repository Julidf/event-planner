import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./categoryCard.css";

const CategoryCard = ({ category, type, categoryName, precio, tipoPrecio }) => {
  // obtener al usuario segund owner de category
  const [owner, setOwner] = useState({});
  
  console.log(window.location.pathname)

  useEffect(() => {
    if (category.owner) {
      fetch(`http://localhost:3030/users/${category.owner}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setOwner(data);
        })
        .catch((error) => {
          console.error("Error al obtener el usuario:", error);
        });
    }
  }, []);

  return (
    <div
      onClick={() => {
        if (window.location.pathname === "/") {
          window.location.href = `/${type}/${category.name.toLowerCase()}`;
        }
      }}
    >
      <Card
        key={category._id}
        sx={{ width: 300, marginBottom: 8, borderRadius: 5 }}
      >
        <CardActionArea sx={{}}>
          <CardMedia
            component="img"
            image={category.picture}
            alt={category.name}
            className="card-media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.name}
            </Typography>
            <Typography sx={{marginBottom:"10px"}} variant="body2" color="text.secondary">
              {category.description}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            {categoryName != "" && precio != "" && (
              <>
                <Typography variant="body2" color="text.secondary">
                  <b>Categoria: {categoryName}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Tipo: {tipoPrecio}- Precio: ${precio}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Proveedor: {owner.name} {owner.surname} </b>
                  <b>Telefono: {owner.phoneNumber} Email: {owner.email}</b>
                </Typography>
              </>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CategoryCard;
