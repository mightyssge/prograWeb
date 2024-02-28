import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Cabecera.jsx';
import ContentSalasIndex from '../components/ContentSalasIndex.jsx';
import { Container, Stack } from "@mui/material";

function SalaIndexPage() {
  const [filterText, setFilterText] = useState(""); // Definir filterText y setFilterText

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
      {/* Proporciona la función onTextfieldChange a Header */}
      <Header onTextfieldChange={setFilterText} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* Proporciona el searchText a ContentSalasIndex */}
        <ContentSalasIndex searchText={filterText} />
      </Stack>
    </Container>
  );
}

export default SalaIndexPage;
