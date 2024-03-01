import React from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Typography, Box, Icon } from '@mui/material';

const CardReserva = ({ titulo,sala}) => {
    return (
        <Box sx={{
            width: 'auto',
            height: 'auto',
            marginTop: '10px'
        }}>
            <Typography variant="h4" component="div" sx={{
                width: 'auto',
                height: 'auto',
            }}>
                {titulo}
            </Typography>
            <Box sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                paddingTop: '10px',
                paddingBottom: '20px ',
                height: 'auto',
            }}>
    
                <Icon sx={{
                    color: '#0000008F'
                }} aria-label="Location">
                    <LocationOnIcon />
                </Icon>
                <Typography color="#2196F3" variant="subtitle1" component="div" sx={{ marginLeft: '5px' }}>
                    {sala}
                </Typography>
            </Box>

       
        </Box>

        

        
    );
}

export default CardReserva;