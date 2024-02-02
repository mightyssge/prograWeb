import Header from '../components/Cabecera.jsx';
import ContentSalasIndex from '../components/ContentSalasIndex.jsx';
import { Container,Stack } from "@mui/material";
import { useState } from 'react';

function SalaIndexPage() {
    const [filterText, setFilterText] = useState("")
    return (

      <Container className='container'>
        <Header onTextfieldChange={setFilterText} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <ContentSalasIndex searchText={filterText} />
        </Stack>
      </Container>
    
    );
  }

export default SalaIndexPage;