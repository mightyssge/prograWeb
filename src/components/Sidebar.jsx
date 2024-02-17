import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate , useLocation } from 'react-router-dom';
import React, { useState } from 'react';

function Sidebar({filter}) {
  const [canFilter, setCanFilter] = useState(false);
  const navigate = useNavigate(); 

  const location = useLocation();

  const canWeFilter = () => {
    if (location.pathname === '/peliculas' || location.pathname === '/salas') {
      setCanFilter(true);
    } else {
      setCanFilter(false);
    }
  }

  const peliculasOnClick = () => {
    navigate('/peliculas');
  };

  const salasOnClick = () => {
    navigate('/salas');
  };

  const handleSearch = (e) => {
    filter(e.target.value)
}

  const logoutOnClick = () => {
    // Realiza las acciones necesarias para cerrar la sesión
    // Por ejemplo, limpiar el estado de la sesión y redirigir a la página de inicio de sesión
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('user');
    navigate('/login'); // Puedes redirigir a donde sea necesario después de cerrar sesión
  };

  useState(() => {
    canWeFilter();
  })

  return (
    <>
      <img
        src={'https://www.qschina.cn/sites/default/files/profiles/logos/universidad-de-lima_592560cf2aeae70239af5157_large.jpg'}
        alt="Logo Ulima"
        style={{ width: 128, height: 127, marginLeft: 51, marginRight: 51, marginTop: 24 }}
      />


      {canFilter && 
      <TextField label="Busca" variant="outlined" margin="normal" sx={{ mx: 2 }} onChange={handleSearch} />
      }
      
      
      
      
      
      <List>
        <ListItem key={'Peliculas'} disablemx sx={{ display: 'block' }} onClick={peliculasOnClick}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              <StarIcon color="grey" />
            </ListItemIcon>
            <ListItemText primary={'Peliculas'} sx={{ opacity: 1, color: 'grey', textDecoration: 'none' }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Salas'} disablemx sx={{ display: 'block' }} onClick={salasOnClick}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              <StarIcon color="grey" />
            </ListItemIcon>
            <ListItemText primary={'Salas'} sx={{ opacity: 1, color: 'grey', textDecoration: 'none' }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Logout'} disablemx sx={{ display: 'block' }} onClick={logoutOnClick}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              <StarIcon color="orange" /> {/* Utilizo un icono rojo para representar Logout */}
            </ListItemIcon>
            <ListItemText primary={'Logout'} sx={{ opacity: 1, color: 'orange', textDecoration: 'none' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default Sidebar;
