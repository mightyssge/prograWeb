import React from 'react';
import { Typography, Chip, Box, Grid, Card, Button, CardMedia, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const DetalleSalas = ({ name, address, img, formato, funciones }) => {
    const navigate = useNavigate();

    const handleClick = (horario, nombrePelicula, funcionid) => {
        console.log("Datos enviados:", { salanombre: name, ventana: horario,  nombrePelicula: nombrePelicula, funcionid: funcionid });
        sessionStorage.setItem('salanombre', name);
        sessionStorage.setItem('ventana', horario);
        sessionStorage.setItem('salaNombre', nombrePelicula);
        sessionStorage.setItem('idVentana', funcionid);
        navigate('/reserva2', {
            state: {
                salanombre: name,
                ventana: horario,
                nombrePelicula: nombrePelicula,
                funcionid: funcionid,
                
            },
        });
    };
    
    return (
        <Box flex={2}>
            <Box sx={{ padding: 5, mt: 5 }}>
                <Grid item md={4} sx={{ mb: 1 }}>
                    <Typography variant="h4" sx={{ fontSize: '40px', fontFamily: 'Roboto' }}>
                        {name}
                    </Typography>
                    <Grid sx={{ display: 'flex', my: 3 }}>
                        <LocationOnIcon color="action" sx={{ marginRight: '15px' }} />
                        <Typography variant="subtitle2" color="#2196F3" fontWeight="600">
                            {address}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid display={'flex'} container spacing={2}>
                    <Grid item sm={8} sx={{ height: '100%' }}>
                        <Card>
                            <CardMedia component="img" image={img} />
                        </Card>
                    </Grid>
                    <Grid item sm={4}>
                        <Card sx={{ height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <header typeof="title" style={{ marginBottom: '16px' }}>
                                    <Typography variant="h5">{name}</Typography>
                                </header>
                                <Typography variant="body1" style={{ fontSize: '16px', fontFamily: 'Roboto', textAlign: 'center' }}>
                                    Tipos de salas disponibles:
                                </Typography>
                                <Box sx={{ mt: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
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
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item style={{ width: '100%' }} sx={{ mt: 4 }} md={4}>
                    <Typography variant="h2" style={{ fontSize: '45px', fontFamily: 'Roboto' }}>
                        Películas disponibles
                    </Typography>
                </Grid>
                <Box sx={{ mt: 8, width: '55%', height: '100%' }}>
                    {funciones &&
                        funciones.map((funcion, index) => (
                            <Grid key={index} style={{ marginBottom: '18%' }}>
                                <Grid item md={4}>
                                    <Box style={{ width: '100%', height: '100%' }}>
                                        <Box style={{ display: 'flex', marginBottom: '4%' }}>
                                            <Avatar variant="rounded">
                                                <Typography>{funcion.peliculasiglas}</Typography>
                                            </Avatar>
                                            <Typography variant="h6" style={{ marginLeft: '2%', marginTop: '5px', fontFamily: 'Roboto' }}>
                                                <b>{funcion.peliculanombre}</b>
                                            </Typography>
                                        </Box>
                                        <Typography variant="body1" style={{ marginLeft: '5%', fontFamily: 'Roboto' }}>
                                            {funcion.peliculaextract}
                                        </Typography>
                                    </Box>
                                    <Grid style={{ display: 'flex', ml: 4, mb: 5 }}>
                                        {funcion.ventanas &&
                                            funcion.ventanas.map((horario, horarioIndex) => (
                                                <Button
                                                    key={horarioIndex}
                                                    onClick={() => handleClick(horario, funcion.peliculanombre, funcion.id)} 
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
                                                        padding: '4px 24px', 
                                                    }}
                                                >
                                                    <Typography variant="h5" style={{ fontSize: '12px', color: 'rgba(151, 71, 255, 1)' }}>
                                                        {horario}
                                                    </Typography>
                                                </Button>
                                            ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                </Box>
            </Box>
        </Box>
    );
};

export default DetalleSalas;
