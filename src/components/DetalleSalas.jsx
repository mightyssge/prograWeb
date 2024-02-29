
import React, { useState, useEffect } from 'react';
import { Typography, Chip, Container, Box, Grid, Card, Avatar ,Button } from '@mui/material';import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom"
import CardMedia from '@mui/material/CardMedia';

const DetalleSalas = ({ name, address, img, formato, peliculas, funciones}) => {
    const navigate = useNavigate();
    const [salaActual, setSalaActual] = useState({ name, address, img });

    console.log(salaActual)
    
    console.log(funciones)

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

                                    {formato.map((formato, index) => (
                                        <Chip
                                            key={index}
                                            label={formato}
                                            variant="filled"
                                            color="default"
                                            style={{ padding: '4px', borderRadius: '100px' }}
                                        />
                                    ))}
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
                
                <Box sx={{ mt: 8, width: "55%", height: "100%" }}>
                    {
                        funciones && funciones.map((funcion, index) => (
                            <Grid key={index} style={{ marginBottom: "18%" }}>
                                <Grid item md={4}>
                                    <Container style={{ width: "100%", height: "100%" }}>
                                        <Container style={{ display: "flex", marginBottom: "4%" }}>
                                            <Avatar variant='rounded'>
                                                <Typography >
                                                    {funcion.peliculasiglas}
                                                </Typography>
                                            </Avatar>
                                            <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                                                <b>{funcion.peliculanombre}</b>
                                            </Typography>
                                        </Container>
                                        <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                                            {funcion.peliculaextract}
                                        </Typography>
                                    </Container>
                                    <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
                                        {funcion.ventanas && funcion.ventanas.map((horario, horarioIndex) => (
                                            <Button  /* onClick={() => handleClick(index, horarioIndex)} */
                                                key={horarioIndex}
                                                sx={{
                                                    marginTop: 2,
                                                    height: '28px',
                                                    border: '1px dashed #9747FF',
                                                    borderRadius: '8px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'rgba(151, 71, 255, 0.04)',
                                                    marginLeft: '20px',
                                                    padding: "4px, 24px, 4px, 24px"
                                                }}
                                            >

                                                <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>
                                                    {horario}
                                                </Typography>

                                            </Button>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}

                </Box>
            </Box >
        </Box>
    );
};
export default DetalleSalas;
