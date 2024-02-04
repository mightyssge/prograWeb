import Header from '../components/Cabecera.jsx';
import ContentSalaReserva from '../components/ContentSalaReserva.jsx';
import { Container,Stack } from "@mui/material";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function PeliculasReservaPage() {

  const navigate = useNavigate();

  // Verifica si el usuario está autenticado al cargar la página de películas
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      // Si no está autenticado, redirige al login
      navigate('/login');
    }
  }, [navigate]);


    return (

      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentSalaReserva/>
        </Stack>
      </Container>
    
    );
  }

export default PeliculasReservaPage;