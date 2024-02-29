
import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import CardMedia from '@mui/material/CardMedia';

const DetalleSalas = ({ name, img, address, formato, peliculas }) => {
    const navigate = useNavigate();
    const [salaActual, setSalaActual] = useState({ name, address, img });

    console.log(salaActual)

    const handleClick = (index, horarioIndex) => {
        const peliculaSeleccionada = peliculas[index];
        const horarioSeleccionado = peliculaSeleccionada.horarios[horarioIndex];

        setSalaActual({
            name,
            img,
            address,
            horarioSeleccionado,
            pelicula: peliculaSeleccionada.pelicula,
        });
        navigate('/reserva2', { state: { salaActual: { name, img, address, horarioSeleccionado, pelicula: peliculaSeleccionada.pelicula } } })
    };

    return (

        <Box flex={2} >
            <Box sx={{ padding: 5, mt: 5 }}>
                <Grid item md={4} sx={{ mb: 1 }} >
                    <Typography variant="h4" sx={{ fontSize: "40px", fontFamily: "Roboto" }}  >
                        {name}
                    </Typography>
                    <Grid sx={{ display: "flex", my: 3 }}>
                        <LocationOnIcon color="action" sx={{ marginRight: "15px" }} ></LocationOnIcon>
                        <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{}}>
                            {address}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid display={"flex"} container spacing={2}  >
                    <Grid item sm={8} sx={{ height: "100%" }} >
                        <Card >
                            <CardMedia
                                component="img"
                                image={img}
                            />
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{ height: "100%" }}>
                            <header typeof='title'>
                                <Typography variant='h5' style={{ margin: "8%" }} > {name}</Typography>
                            </header>
                            <Typography variant='body1' style={{ marginLeft: "4%", fontSize: "16px", fontFamily: "Roboto", paddingLeft: "4%" }} >
                                numero <br />
                                <br />Tipos de salas disponibles:
                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px' }} spacing={8}>

                                disponibles

                                </Box>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item style={{ width: "100%" }} sx={{ mt: 4 }} md={4} >
                    <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
                        Peliculas disponibles
                    </Typography>
                </Grid>


                {/*<Box sx={{ mt: 5, width: "70%", height: "140%" }} >
        
          {
            currentSala.peliculas.map((funcion) => {
              return (
                <PeliculasDisponibles
                  pelicula={funcion.pelicula}
                  horarios={funcion.horarios}
                  listafiltrada={currentPeliculasforSala}
                />
              )
            })
          }
          
        </Box>*/}
            </Box >

        </Box>
    );
};
export default DetalleSalas;
