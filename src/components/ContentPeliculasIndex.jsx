import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from '@mui/material';
import CardPelicula from "./CardPelicula";

const ContentPeliculasIndex = ({ searchText }) => {

    const [moviesData, setMoviesData] = useState([]);
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
        getMovies();
    }, [searchText]);

    const getMovies = async () => {
        const response = await fetch(`https://peliculasbackendpw.azurewebsites.net/cines/ver-peliculas?title=${searchText}`)
        const data = await response.json()
        setMoviesData(data)
        const listaPeliculasStr = JSON.stringify(data)
        sessionStorage.setItem("PELICULAS", listaPeliculasStr)
    }

    const fetchUserID = async (nombre, apellidos) => {
        try {
            const response = await fetch(`https://peliculasbackendpw.azurewebsites.net/ver-usuarioid?nombre=${nombre}&apellido=${apellidos}`);
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
        <Box flex={7} sx={{ p: 3 }}>
            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Películas
            </Typography>

            <Box sx={{ mt: 3, padding: '19px 24px 0 24px' }}>
                <Grid container spacing={2}>

                    {moviesData.map((movie) => (
                        <CardPelicula
                            key={movie.pk}
                            movie={movie}
                            id={movie.pk}
                            title={movie.title}
                            year={movie.year}
                            genres={movie.genres}
                            thumbnail={movie.thumbnail}
                            path={movie.path}
                        />
                    ))} 
                </Grid>
            </Box>
        </Box>
    );
};

export default ContentPeliculasIndex;
