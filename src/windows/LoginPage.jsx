// En LoginPage.jsx
import React, { useState, useEffect } from "react";
import { Container, TextField, Button, Typography, alpha, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import users from "./usuarios/usuario.json";

const LoginPage = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showAlert, setShowAlert] = useState(false);
  
    const isCorreoInstitucional = (correo) => {
      const correoRegex = /@aloe\.ulima\.edu\.pe$/i;
      return correoRegex.test(correo);
    };
  
    const handleRegisterClick = () => {
      navigate('/register');
    };
  
    const handleLogin = (e) => {
        e.preventDefault();
      
        if (!isCorreoInstitucional(correo)) {
          setError("Por favor, utiliza un correo institucional");
          setShowAlert(true);
      
          setTimeout(() => {
            setShowAlert(false);
            setError("");
          }, 10000);
          return;
        }
      
        // Recupera el array de usuarios del localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      
        const usuarioEncontrado = users.find(
          (usuario) => usuario.correo === correo && usuario.password === password
        );
      
        if (usuarioEncontrado) {
          // Almacena la información de inicio de sesión en sessionStorage
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('username', usuarioEncontrado.nombre);
      
          // Almacena el nombre de usuario en localStorage
          localStorage.setItem('USERNAME', usuarioEncontrado.nombre);
      
          navigate('/peliculas');
        } else {
          setError("Contraseña incorrecta");
          setShowAlert(true);
      
          setTimeout(() => {
            setShowAlert(false);
            setError("");
          }, 10000);
        }
      };
  
    useEffect(() => {
      // Verifica si el usuario está autenticado al cargar la página
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
      if (isLoggedIn) {
        // Si está autenticado, redirige a la página de películas
        navigate('/peliculas');
      }
    }, [navigate]);

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
        padding: "20px",
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
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(e);
          }}
          sx={{
            background: "white",
            borderRadius: 1,
          }}
        >
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginBottom: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showAlert && (
            <Alert
              severity="error"
              sx={{ marginBottom: 2, textAlign: "center" }}
            >
              {error}
            </Alert>
          )}
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
            INGRESAR
          </Button>
          <Button
            variant="outlined"
            color="warning"
            fullWidth
            onClick={handleRegisterClick}
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              backgroundColor: "#fff",
            }}
            component={Link}
            to={"/register"}
          >
            REGISTRARSE
          </Button>
          <Link
            to="/recover"
            component={Link}
            style={{color : "orange"}}
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              color: "orange", 
            }}
          >
            Olvidé mi contraseña
          </Link>
        </form>
      </Container>
    </Container>
  );
};

export default LoginPage;
