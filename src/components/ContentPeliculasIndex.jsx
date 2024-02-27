import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from '@mui/material';
import CardPelicula from "./CardPelicula";

const ContentPeliculasIndex = ({ searchText }) => {
    const [moviesData, setMoviesData] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const obtenerPeliculas = async () => {
            try {
                const response = await fetch("http://localhost:8000/peliculas.json");
                const data = await response.json();
                setMoviesData(data);
            } catch (error) {
                console.error("Error fetching peliculas.json", error);
            }
        };

        obtenerPeliculas();
    }, []);

    useEffect(() => {
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
                    {filteredMovies.map((movie) => (
                        <CardPelicula
                            key={movie.pk}
                            movie={movie}
                            id={movie.pk}
                            title={movie.fields.title}
                            year={movie.fields.year}
                            genres={movie.fields.generos}
                            thumbnail={movie.fields.thumbnail}
                            path={movie.fields.path}
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ContentPeliculasIndex;
