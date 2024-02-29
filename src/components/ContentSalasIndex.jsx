import React from "react";
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useEffect } from "react";
import CardSala from "./CardSala";


const ContentSalasIndex = ({ searchText }) => {

    const [salasData, setSalasData] = useState([])

    const obtenerSalas = async () => {
        const response = await fetch(`http://localhost:8000/cines/ver-salas?nombre=${searchText}`)
        const data = await response.json()
        setSalasData(data)
        const listaSalasStr = JSON.stringify(data)
        sessionStorage.setItem("SALAS", listaSalasStr)
    }
    useEffect(() => {
        obtenerSalas()
    }, [searchText])

    /*useEffect(() => {
        const filteredSalas = salasData.filter((sala) => sala.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredSalas(filteredSalas)
    }, [salasData, searchText])*/

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
                                    sala={sala.pk}
                                    name={sala.nombre}
                                    address={sala.direccion}
                                    //city={sala.city}
                                    path={sala.path}
                                    formato={sala.formats}
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