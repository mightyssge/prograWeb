import React from 'react';
import { Grid, Container, Avatar, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function PeliculasDisponibles(props) {

    const navigate = useNavigate();

    const peliActual = props.listafiltrada.find(pelicula => pelicula.title === props.pelicula)
    const handleHorarioClick = (horario) => {
        const dataToSave = {
            pelicula: props.pelicula,
            sigla: peliActual.siglas,
            horario: horario,
            
        };
    
        console.log(dataToSave);
    
        sessionStorage.setItem('seleccionHorario', JSON.stringify(dataToSave));
        navigate('/reserva2');
    };
    
      
    
    if (!peliActual) {
        return (
          <Grid item md={4}>
            <Typography variant="body1" style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
              Película no encontrada.
            </Typography>
          </Grid>
        );
      }
return (
        <Grid item md={4}>
            <Container style={{ width: "100%", height: "100%" }}>
            <Container style={{ display: "flex", marginBottom: "4%" }}>
                <Avatar variant='rounded' >
                {peliActual.siglas}
                </Avatar>
                <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                <b>{props.pelicula}</b>
                </Typography>
            </Container>
            <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                {peliActual.extract}
            </Typography>
            </Container>

            <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
                {
                    props.horarios.map((horario)=>{
                        return <Button
                        onClick={() => handleHorarioClick(horario)}
                        sx={{
                        marginTop: '40px',
                        width: '100px',
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
                        <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>{horario}</Typography>
                    </Button>
                    })
                }
            

            </Grid>

        </Grid>
)
}

export default PeliculasDisponibles