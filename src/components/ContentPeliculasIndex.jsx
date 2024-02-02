import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from '@mui/material';
import CardPelicula from "./CardPelicula";

const ContentPeliculasIndex = ({ searchText }) => {
    const [moviesData, setMoviesData] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const obtenerPeliculas = async () => {
        const response = await fetch("/peliculas.json");
        const data = await response.json();
        setMoviesData(data);
    };

    useEffect(() => {
        obtenerPeliculas();
    }, []);

    useEffect(() => {
        // Verifica si searchText no es null ni undefined antes de filtrar
        const filteredMovies = searchText
            ? moviesData.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
            : moviesData;

        setFilteredMovies(filteredMovies);
    }, [moviesData, searchText]);

    return (
        <Box flex={7} sx={{ p: 3 }}>
            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Películas
            </Typography>

            <Box sx={{ mt: 3, padding: '19px 24px 0 24px' }}>
                <Grid container spacing={2}>
                    {filteredMovies.map((e) => (
                        <CardPelicula
                            key={e.id}
                            movie={e}
                            id={e.id}
                            title={e.title}
                            year={e.year}
                            cast={e.cast}
                            genres={e.genres}
                            extract={e.extract}
                            thumbnail={e.thumbnail}
                            path={e.path}
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ContentPeliculasIndex;
