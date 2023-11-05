import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./categoryCard.css";

const CategoryCard = (category) => {
  return (
    <div>
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
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CategoryCard;
