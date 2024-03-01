import React, { useEffect, useState } from 'react';
import { Typography, Chip, Container, Box, Grid, Card, Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReactPlayer from 'react-player/youtube';

const DetallePelis = ({ title, year, thumbnail, extract, genres, funciones, actores }) => {
  const navigate = useNavigate();
  const [peliculaActual, setPeliculaActual] = useState({ title, year, thumbnail});
  const [open, setOpen] = useState(false);
  const [urlTrailer, setUrlTrailer] = useState('');
  const [tomatometer, setTomatometer] = useState('--');
  const [metacritic, setMetacritic] = useState('--');
  const [imdb, setImdb] = useState('--');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const getUrl = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhNrIix98VTOcbjdFuvHMZFO5ei6QNwAw&type=video&part=snippet&maxResults=1&q=trailer%20${title}`);
    const data = await response.json();
    const id_trailer = data["items"][0]["id"]["videoId"];
    setUrlTrailer(`https://www.youtube.com/watch?v=${id_trailer}`);

  }

  const getRatings = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=cd062263&t=${title}`);
    const data = await response.json();

    for (let i = 0; i < data.Ratings.length; i++) {
      if (data.Ratings[i].Source === "Rotten Tomatoes") {
        setTomatometer(data.Ratings[i].Value);
      }
      else if (data.Ratings[i].Source === "Metacritic") {
        setMetacritic(data.Ratings[i].Value);
      }
      else if (data.Ratings[i].Source === "Internet Movie Database") {
        setImdb(data.Ratings[i].Value);
      }
    }}

  useEffect(() => {
    getRatings();
    getUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (  horario, sala, funcionid) => {

    sessionStorage.setItem('idVentana', funcionid);
    navigate('/reserva', {
      state: {
        salanombre: sala,
        ventana: horario,
        titulopelicula: title,
        thumbnail:thumbnail,
        funcionid: funcionid
      },
    });
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

            <Box sx={{ mt: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '5%', ml: '10px', pb: '10px' }}>
            {actores.map((actor, index) => (
        <Chip
            key={index}
            label={actor}
            variant="outlined"
            color="secondary"
            style={{ margin: '4px', borderRadius: '100px' }}
        />
    ))}
</Box>
<Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
              <Grid container spacing={1}>
                <Grid item xs={4} textAlign={"center"}>
                  <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" style={{ width: 50 }} alt='tomate' /> <br />
                     {tomatometer} <br />
                     TOMATOMETER
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png" style={{ width: 50 }} alt='m'/> <br />
                   {metacritic} <br />
                   METACRITIC
                </Grid>
                <Grid item xs={4} textAlign={"center"}>
                <img src="https://cdn1.iconfinder.com/data/icons/macster/70/.svg-17-512.png" style={{ width:50 }} alt='star' /> <br />
                   {imdb} <br />
                   IMDb
                </Grid>
              </Grid>
            </Box>
<Box sx={{ mt: '16px', display: 'flex', gap: '8px', margin: '5%' }}>
              <Button onClick={handleClickOpen}>Ver Trailer</Button>
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
        {funciones &&
          funciones.map((funcion, index) => (
            <Grid key={index} style={{ marginBottom: "18%" }}>
              <Grid item md={4}>
              <Container style={{ width: "100%", height: "100%" }}>
                <Container style={{ display: "flex", marginBottom: "4%" }}>
                  <Avatar variant='rounded'>
                    <Typography >
                      {funcion.salasiglas}
                    </Typography>
                  </Avatar>
                  <Typography variant='h6' style={{ marginLeft: "2%", marginTop: "5px", fontFamily: "Roboto" }}>
                    <b>{funcion.salanombre}</b> 
                  </Typography>
                </Container>
                <Typography variant='body1' style={{ marginLeft: "5%", fontFamily: "Roboto" }}>
                  {funcion.salaadress}
                </Typography>
              </Container>

                <Grid sx={{ display: "flex", ml: 4, mb: 5 }}>
                  {funcion.ventanas.map((horario, horarioIndex) => (
                    <Button
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
                      onClick={() => {
                        handleClick(horario, funcion.salanombre, funcion.id);
                       
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
      <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      >
        <DialogTitle >
          {`Mira el trailer de ${title}`}
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
          <ReactPlayer url={urlTrailer} controls />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>


  );
};

export default DetallePelis;