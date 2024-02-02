import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import './style.css';

const RecoverPage = () => {



  const [correo, setCorreo] = useState("");
  const [codigoAlumno, setCodigoAlumno] = useState("");

  const handleRecover = () => {
    return
  };

  //const navigate = useNavigate();




  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha("#FA7525", 0.3),
        padding: "20px"
      }}
    >
      <Typography
        className="titulo1"
        variant="h1"
        align="center"
        sx={{
          marginBottom: 5,
          color: "#000",
          fontSize: '120px',
        }}
      >
        SALAS DE CINE ULIMA
      </Typography>

      <Container
        sx={{
          width: "80%",
          maxWidth: "500px",
          marginBottom: 5,
          '@media (min-width:600px)': {
            width: "40%",
          },
          backgroundColor: "white",
          p: "20px",
          borderRadius: 2,
        }}
      >
        <form
          onSubmit={handleRecover}
          sx={{
            background: "white",
            borderRadius: 1,
          }}
        >
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            label="Código de Alumno"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={codigoAlumno}
            onChange={(e) => setCodigoAlumno(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              backgroundColor: "#FA7525",
            }}
          >
            RECUPERAR CUENTA
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default RecoverPage;
