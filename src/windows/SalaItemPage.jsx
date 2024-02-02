import Header from '../components/Cabecera.jsx';
import { Container,Stack } from "@mui/material";
import ContentSalaItem from '../components/ContentSalaItem.jsx'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SalaItemPage() {

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

      //esto es el contenido de los menus
      <Container className='container'>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
         
          <ContentSalaItem/>
         
        </Stack>
      </Container>
    
    );
  }

export default SalaItemPage;