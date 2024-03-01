import React, { useState, useEffect } from 'react';
import {  Box,Grid, Card } from '@mui/material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useParams, useLocation } from 'react-router-dom';
import DetalleSalas from './DetalleSalas';

const ContentSalaItem = () => {
  const [salaEspecifica, setSalaEspecifica] = useState(null);
  const [funcionesData, setFuncionesData] = useState([])
  const { path } = useParams();
  const location = useLocation();


  const obtenerFunciones = async() => {
    const response = await fetch(`http://localhost:8000/cines/ver-funciones-sala?idsala=${location.state.sala.id}`);
    const data = await response.json();
    setFuncionesData(data);
    console.log("hola"+data)
    console.log("Funciones" + funcionesData.id)
  
  }


  useEffect(() => {

    console.log("pk:"+location.state.sala.pk)
    obtenerFunciones();
    setSalaEspecifica(location.state.sala)
    console.log("Funciones2" + funcionesData.id)
  }, []);

  return (
    <Box flex={2}>
      <Typography variant="h4" component="div" sx={{ paddingTop: '20px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Salas
      </Typography>

      {salaEspecifica && (
        <DetalleSalas
          name={salaEspecifica.nombre}
          address={salaEspecifica.direccion}
          img={salaEspecifica.imagen}
          formato={salaEspecifica.formato}
          path={salaEspecifica.path}
          funciones = {funcionesData}
        />
      )}
    </Box>
    
  );
};

export default ContentSalaItem;