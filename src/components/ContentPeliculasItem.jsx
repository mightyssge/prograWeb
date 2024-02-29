import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto'; 
import DetallePelis from './DetallePelis';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

const ContentPeliculasItem = () => {
  const [pelicula, setPelicula] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    console.log("Valor de path:", path);
    const obtenerPelicula = async () => {
      try {
        const response = await fetch(`http://localhost:8000/cines/ver-pelicula/?path=${path}`);
        const data = await response.json();
        setPelicula(data);
      } catch (error) {
        console.error("Error obteniendo la película", error);
      }
    };

    obtenerPelicula();
  }, [path]);

  return (
    <Box flex={2} sx={{ p: 4 }}>
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Películas
      </Typography>

      {pelicula && (
        <DetallePelis
          title={pelicula.nombre}
          year={pelicula.anho}
          thumbnail={pelicula.thumbnail}
          extract={pelicula.extract}
          genres={pelicula.generos}
          actores={pelicula.actores}
        />
      )}
    </Box>
  );
};

export default ContentPeliculasItem;
