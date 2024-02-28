import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from '@mui/material';
import CardPelicula from "./CardPelicula";

const ContentPeliculasIndex = ({ searchText }) => {
    
    const [moviesData, setMoviesData]= useState([]);
  
    const getMovies = async()=>{
      const response = await fetch(`http://localhost:8000/cines/ver-peliculas/?title=${searchText}`)
      const  data= await response.json()
      const listaPeliculasStr = JSON.stringify(data)
      sessionStorage.setItem("PELICULAS", listaPeliculasStr)
  
  
      setMoviesData(data)
  
    }


    useEffect(() => {
        getMovies()
    
        const peliculasStr = sessionStorage.getItem("PELICULAS")
        if (peliculasStr == null) {
          getMovies()
        }else {
            const peliculas = JSON.parse(peliculasStr)
            setMoviesData(peliculas)
        }
    }, [])

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
                            genres={movie.generos}
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
