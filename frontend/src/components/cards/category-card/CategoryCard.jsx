import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./categoryCard.css"

const CategoryCard = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        // Realiza la solicitud GET al servidor para obtener las categorías
        fetch('http://localhost:3030/categories/all')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener las categorías:', error);
                setLoading(false);
            });
    }, []); // <- Dependencias vacías, se ejecutará solo una vez
  
    return (
        <div>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                data.map((category) => (
                    <Card
                        key={category._id}
                        sx={{ maxWidth: 345, marginBottom: 8, borderRadius: 5 }}
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
                ))
            )}
        </div>
    );
};

export default CategoryCard;
