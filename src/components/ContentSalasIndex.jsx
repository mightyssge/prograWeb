import React from "react";
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useEffect } from "react";
import CardSala from "./CardSala";


const ContentSalasIndex = ({ searchText }) => {

    const [salasData, setSalasData] = useState([])
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');

    useEffect(() => {
        const storedUserData = sessionStorage.getItem('user');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            const { nombre, apellidos } = userData;
            setNombre(nombre);
            setApellidos(apellidos);
            fetchUserID(nombre, apellidos);
        }
        obtenerSalas();
    }, [searchText]);

    const obtenerSalas = async () => {
        const response = await fetch(`http://localhost:8000/cines/ver-salas?path=${searchText}`)
        const data = await response.json()
        setSalasData(data)
        const listaSalasStr = JSON.stringify(data)
        sessionStorage.setItem("SALAS", listaSalasStr)
    }
    
    const fetchUserID = async (nombre, apellidos) => {
        try {
            const response = await fetch(`http://localhost:8000/cines/ver-usuarioid?nombre=${nombre}&apellido=${apellidos}`);
            if (!response.ok) {
                throw new Error('Error al procesar la solicitud');
            }
            const responseData = await response.json();
            console.log('ID del usuario:', responseData.id);
            sessionStorage.setItem('id', responseData.id);
        } catch (error) {
            console.error('Error al obtener el ID del usuario:', error);
        }
    };

    return (
        <Box flex={7} sx={{ p: 3 }} >

            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Salas disponibles
            </Typography>


            <Box sx={{ mt: 3, p: 2 }} >

                <Grid container spacing={2} >
                    {
                        salasData.map((sala) => {
                            return (
                                <CardSala
                                    sala={sala}
                                    name={sala.nombre}
                                    address={sala.direccion}
                                    city={sala.city}
                                    path={sala.path}
                                    formato={sala.formato}
                                    img={sala.imagen}
                                />)
                        })
                    }





                </Grid>
            </Box>
        </Box>
    )
}

export default ContentSalasIndex
