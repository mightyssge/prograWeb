import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import DetalleSalas from './DetalleSalas';

const ContentSalaItem = () => {
  const [salas, setSala] = useState(null);
  const { path } = useParams();

  useEffect(() => {
    console.log("Valor de path:", path);
    const obtenerSalas = async () => {
      try {
        const response = await fetch(`http://localhost:8000/cines/ver-salas?path=${path}`);
        const data = await response.json();
        console.log(data);
        setSala(data);
      } catch (error) {
        console.error("Error obteniendo la película", error);
      }
    };

    obtenerSalas();
  }, [path]);

  return (
    <Box flex={2}>
      <Typography variant="h4" component="div" sx={{ paddingTop: '20px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
        Salas
      </Typography>

      {salas && (
        <DetalleSalas
          name={salas.nombre}
          address={salas.direccion}
          img={salas.imagen}
          formato={salas.formato}
        />
      )}
    </Box>
  );
};

export default ContentSalaItem;
