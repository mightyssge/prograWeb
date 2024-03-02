
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto'; 
import DetallePelis from './DetallePelis';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';



const ContentPeliculasItem = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [salasData, setSalasData] = useState([])
  const [funcionesData, setFuncionesData] = useState([])
  const [peliculaEspecifica, setPeliculaEspecifica] = useState(null);
  const { path } = useParams();
  const location = useLocation();
  

const obtenerFunciones = async() => {
  const response = await fetch(`http://localhost:8000/cines/ver-funciones-pelicula?idpelicula=${location.state.movie.id}`);
  const data = await response.json();
  setFuncionesData(data);

}

  useEffect(() => {
    obtenerFunciones();
    setPeliculaEspecifica(location.state.movie)
  }, []);

 
  

  return (
    <Box flex={2} sx={{ p: 4 }}>
      <Typography variant="h4" component="div" sx={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Películas
      </Typography>

      {peliculaEspecifica && (
        <DetallePelis
          title={peliculaEspecifica.title}
          year={peliculaEspecifica.year}
          thumbnail={peliculaEspecifica.thumbnail}
          extract={peliculaEspecifica.extract}
          genres={peliculaEspecifica.genres}
          path={peliculaEspecifica.path}
          funciones = {funcionesData}
          actores={peliculaEspecifica.cast}


          /* salas={peliculaEspecifica.salas.map(sala => {
            const salaInfo = salasData.find(s => s.name === sala.sala);
            return { ...sala, ...salaInfo };
          })}  */
          

        />
      )}

      
    </Box>
  );
};

export default ContentPeliculasItem;
