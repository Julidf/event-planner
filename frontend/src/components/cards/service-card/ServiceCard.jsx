import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./serviceCard.css"

const ServiceCard = ({name, description, image}) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 8, borderRadius:5 }}>
        <CardActionArea sx={{}}>
        <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default ServiceCard