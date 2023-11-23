import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./categoryCard.css";

const CategoryCard = ({ category, type, categoryName, precio }) => {
  // obtener al usuario segund owner de category
  const [owner, setOwner] = useState({});

  useEffect(() => {
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
  });

  return (
    <div
      onClick={() => {
        window.location.href = `/${type}/${category.name.toLowerCase()}`;
      }}
    >
      <Card
        key={category._id}
        sx={{ width: 300, marginBottom: 8, borderRadius: 5 }}
      >
        <CardActionArea sx={{}}>
          <CardMedia
            component="img"
            height="140"
            image={category.picture}
            alt={category.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category.description}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            {categoryName != "" && precio != "" && (
              <>
                <Typography variant="body2" color="text.secondary">
                  <b>Categoria: {categoryName}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Precio: ${precio}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Proveedor: {owner.name} {owner.surname} ({owner.email})</b>
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
