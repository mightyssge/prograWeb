import React, { useState } from 'react';
import { Typography, Chip, Container, Box, Grid, Card, Avatar ,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DetallePelis = ({ title, year, thumbnail, extract, genres }) => {
  const navigate = useNavigate();
  const [peliculaActual, setPeliculaActual] = useState({ title, year, thumbnail });
  const salas = null
  console.log("pelicula actual"+peliculaActual)

  const handleClick = (index, horarioIndex) => {
    const salaSeleccionada = salas[index];
    const horarioSeleccionado = salaSeleccionada.horarios[horarioIndex];
  
    setPeliculaActual({
      title,
      year,
      thumbnail,
      horarioSeleccionado,
      sala: salaSeleccionada.sala, // Agregamos el nombre de la sala al estado
    });
  
    console.log(`Información de la película: ${title}, Año: ${year}, Sala: ${salaSeleccionada.sala}, Horario seleccionado: ${horarioSeleccionado}, Img: ${thumbnail}`);
  
    navigate('/reserva', { state: { peliculaActual: { title, year, thumbnail, horarioSeleccionado, sala: salaSeleccionada.sala } } });
  };

  return (
    <Box sx={{ padding: 4, mt: 5 }}>
      <Grid item md={4} sx={{ mb: 1 }}>
        <Typography variant="h4" sx={{ fontSize: '40px', fontFamily: 'Roboto' }}>
          {title}
        </Typography>
        <Grid sx={{ display: "flex", my: 3 }}>
            <CalendarMonthIcon color="action" sx={{ marginRight: "15px" }} ></CalendarMonthIcon>
            <Typography variant="subtitle2" color="#2196F3" fontWeight="600" sx={{}}>
            {year}
            </Typography>
          </Grid>
        <Grid sx={{ display: 'flex' }}>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <img
              src={thumbnail}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ height: '100%', width: '100%', pr: 2 }}>
            <header typeof="title">
              <Typography variant="h5" style={{ margin: '8%' }}>
                Sinopsis
              </Typography>
            </header>
            <Typography
              variant="body1"
              style={{
                margin: '8%',
                fontSize: '16px',
                fontFamily: 'Roboto',
              }}
            >
              {extract}
            </Typography>
            <Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
              {genres.map((genre, index) => (
                <Chip
                  key={index}
                  label={genre}
                  variant="filled"
                  color="default"
                  style={{ padding: '4px', borderRadius: '100px' }}
                />
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid style={{ paddingTop: "2%", width: "100%" }} item md={4}>
        <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }} sx={{mt:3}}>
          Salas disponibles
        </Typography>
      </Grid>
      <Box sx={{ mt: 8, width: "55%", height: "100%" }}>
      {/* salas ? {salas.map((sala, index) => (
          <Grid key={index} style={{ marginBottom: "18%" }}>
            <Grid item md={4}>
              <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                  <Avatar variant='rounded'>
                    <Typography >
                      {sala.siglas}
                    </Typography>
                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    <b>{sala.sala}</b> Nombre de la sala
                  </Typography>
                </Container>
                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                  {sala.address}
                </Typography>
              </Container>
              <Grid sx={{ display: "flex", ml: 4, mb: 5}}>
                {sala.horarios.map((horario, horarioIndex) => (
                  <Button onClick={() => handleClick(index, horarioIndex)}
                    key={horarioIndex}
                    sx={{
                      marginTop: 2,
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

                      <Typography variant="h5" style={{ fontSize: '12px', color: "rgba(151, 71, 255, 1)" }}>
                        {horario}
                      </Typography>

                  </Button>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}:{"No hay horarios disponibles"}   */}
      </Box>
    </Box>
  );
};

export default DetallePelis;