import Header from '../components/Cabecera.jsx';
import { useNavigate } from 'react-router-dom';
import React, { useEffect , useState} from 'react';
import ContentPeliculasIndex from '../components/ContentPeliculasIndex.jsx';
import { Container,Stack } from "@mui/material";



function PeliculasIndexPage() {

  const[filterText, setFilterText] = useState("");
 

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
      <Header  onTextfieldChange={setFilterText} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <ContentPeliculasIndex  searchText={filterText}/>
      </Stack>
    </Container>

  );
}

export default PeliculasIndexPage;